import { expectTypeOf } from "expect-type";
import { describe, expect, test } from "vitest";

import { boolean, flatten, number, picklist, string, transform } from "valibot";
import { createEnv } from "../src/index.js";

function ignoreErrors(cb: () => void) {
	try {
		cb();
	} catch {
		// ignore
	}
}

test("server vars should not be prefixed", () => {
	ignoreErrors(() => {
		createEnv({
			clientPrefix: "FOO_",
			server: {
				// @ts-expect-error - server should not have FOO_ prefix
				FOO_BAR: string(),
				BAR: string(),
			},
			client: {},
			runtimeEnv: {},
		});
	});
});

test("client vars should be correctly prefixed", () => {
	ignoreErrors(() => {
		createEnv({
			clientPrefix: "FOO_",
			server: {},
			client: {
				FOO_BAR: string(),
				// @ts-expect-error - no FOO_ prefix
				BAR: string(),
			},
			runtimeEnv: {},
		});
	});
});

test("runtimeEnvStrict enforces all keys", () => {
	createEnv({
		clientPrefix: "FOO_",
		server: {},
		client: {},
		runtimeEnvStrict: {},
	});

	createEnv({
		clientPrefix: "FOO_",
		server: {},
		client: { FOO_BAR: string() },
		runtimeEnvStrict: { FOO_BAR: "foo" },
	});

	createEnv({
		clientPrefix: "FOO_",
		server: { BAR: string() },
		client: {},
		runtimeEnvStrict: { BAR: "foo" },
	});

	createEnv({
		clientPrefix: "FOO_",
		server: { BAR: string() },
		client: { FOO_BAR: string() },
		runtimeEnvStrict: { BAR: "foo", FOO_BAR: "foo" },
	});

	createEnv({
		clientPrefix: "FOO_",
		server: {},
		client: { FOO_BAR: string() },
		runtimeEnvStrict: {
			FOO_BAR: "foo",
			// @ts-expect-error - FOO_BAZ is extraneous
			FOO_BAZ: "baz",
		},
	});

	ignoreErrors(() => {
		createEnv({
			clientPrefix: "FOO_",
			server: { BAR: string() },
			client: { FOO_BAR: string() },
			// @ts-expect-error - BAR is missing
			runtimeEnvStrict: {
				FOO_BAR: "foo",
			},
		});
	});
});

describe("return type is correctly inferred", () => {
	test("simple", () => {
		const env = createEnv({
			clientPrefix: "FOO_",
			server: { BAR: string() },
			client: { FOO_BAR: string() },
			runtimeEnvStrict: {
				BAR: "bar",
				FOO_BAR: "foo",
			},
		});

		expectTypeOf(env).toEqualTypeOf<
			Readonly<{
				BAR: string;
				FOO_BAR: string;
			}>
		>();

		expect(env).toMatchObject({
			BAR: "bar",
			FOO_BAR: "foo",
		});
	});

	test("with transforms", () => {
		const env = createEnv({
			clientPrefix: "FOO_",
			server: { BAR: transform(string(), Number) },
			client: { FOO_BAR: string() },
			runtimeEnvStrict: {
				BAR: "123",
				FOO_BAR: "foo",
			},
		});

		expectTypeOf(env).toEqualTypeOf<
			Readonly<{
				BAR: number;
				FOO_BAR: string;
			}>
		>();

		expect(env).toMatchObject({
			BAR: 123,
			FOO_BAR: "foo",
		});
	});

	test("without client vars", () => {
		const env = createEnv({
			clientPrefix: "FOO_",
			server: { BAR: string() },
			client: {},
			runtimeEnvStrict: {
				BAR: "bar",
			},
		});

		expectTypeOf(env).toEqualTypeOf<
			Readonly<{
				BAR: string;
			}>
		>();

		expect(env).toMatchObject({
			BAR: "bar",
		});
	});
});

test("can pass number and booleans", () => {
	const env = createEnv({
		clientPrefix: "FOO_",
		server: {
			PORT: number(),
			IS_DEV: boolean(),
		},
		client: {},
		runtimeEnvStrict: {
			PORT: 123,
			IS_DEV: true,
		},
	});

	expectTypeOf(env).toEqualTypeOf<
		Readonly<{
			PORT: number;
			IS_DEV: boolean;
		}>
	>();

	expect(env).toMatchObject({
		PORT: 123,
		IS_DEV: true,
	});
});

describe("errors when validation fails", () => {
	test("envs are missing", () => {
		expect(() =>
			createEnv({
				clientPrefix: "FOO_",
				server: { BAR: string() },
				client: { FOO_BAR: string() },
				runtimeEnv: {},
			}),
		).toThrow("Invalid environment variables");
	});

	test("envs are invalid", () => {
		expect(() =>
			createEnv({
				clientPrefix: "FOO_",
				server: { BAR: transform(string(), Number, number()) },
				client: { FOO_BAR: string() },
				runtimeEnv: {
					BAR: "123abc",
					FOO_BAR: "foo",
				},
			}),
		).toThrow("Invalid environment variables");
	});

	test("with custom error handler", () => {
		expect(() =>
			createEnv({
				clientPrefix: "FOO_",
				server: {
					BAR: transform(
						string(),
						Number,
						number("Expected number, received nan"),
					),
				},
				client: { FOO_BAR: string() },
				runtimeEnv: {
					BAR: "123abc",
					FOO_BAR: "foo",
				},
				onValidationError: (err) => {
					const barError = flatten(err).nested.BAR?.[0] as string;
					throw new Error(`Invalid variable BAR: ${barError}`);
				},
			}),
		).toThrow("Invalid variable BAR: Expected number, received nan");
	});
});

describe("errors when server var is accessed on client", () => {
	test("with default handler", () => {
		const env = createEnv({
			clientPrefix: "FOO_",
			server: { BAR: string() },
			client: { FOO_BAR: string() },
			runtimeEnvStrict: {
				BAR: "bar",
				FOO_BAR: "foo",
			},
			isServer: false,
		});

		expect(() => env.BAR).toThrow(
			"❌ Attempted to access a server-side environment variable on the client",
		);
	});

	test("with custom handler", () => {
		const env = createEnv({
			clientPrefix: "FOO_",
			server: { BAR: string() },
			client: { FOO_BAR: string() },
			runtimeEnvStrict: {
				BAR: "bar",
				FOO_BAR: "foo",
			},
			isServer: false,
			onInvalidAccess: (key) => {
				throw new Error(`Attempted to access ${key} on the client`);
			},
		});

		expect(() => env.BAR).toThrow("Attempted to access BAR on the client");
	});
});

describe("client/server only mode", () => {
	test("client only", () => {
		const env = createEnv({
			clientPrefix: "FOO_",
			client: {
				FOO_BAR: string(),
			},
			runtimeEnv: { FOO_BAR: "foo" },
		});

		expectTypeOf(env).toEqualTypeOf<Readonly<{ FOO_BAR: string }>>();
		expect(env).toMatchObject({ FOO_BAR: "foo" });
	});

	test("server only", () => {
		const env = createEnv({
			server: {
				BAR: string(),
			},
			runtimeEnv: { BAR: "bar" },
		});

		expectTypeOf(env).toEqualTypeOf<Readonly<{ BAR: string }>>();
		expect(env).toMatchObject({ BAR: "bar" });
	});

	test("config with missing client", () => {
		ignoreErrors(() => {
			createEnv(
				// @ts-expect-error - incomplete client config - client not present
				{
					clientPrefix: "FOO_",
					server: {},
					runtimeEnv: {},
				},
			);
		});
	});

	test("config with missing clientPrefix", () => {
		ignoreErrors(() => {
			// @ts-expect-error - incomplete client config - clientPrefix not present
			createEnv({
				client: {},
				server: {},
				runtimeEnv: {},
			});
		});
	});
});

describe("shared can be accessed on both server and client", () => {
	process.env = {
		NODE_ENV: "development",
		BAR: "bar",
		FOO_BAR: "foo",
	};

	function lazyCreateEnv() {
		return createEnv({
			shared: {
				NODE_ENV: picklist(["development", "production", "test"]),
			},
			clientPrefix: "FOO_",
			server: { BAR: string() },
			client: { FOO_BAR: string() },
			runtimeEnv: process.env,
		});
	}

	expectTypeOf(lazyCreateEnv).returns.toEqualTypeOf<
		Readonly<{
			NODE_ENV: "development" | "production" | "test";
			BAR: string;
			FOO_BAR: string;
		}>
	>();

	test("server", () => {
		const { window } = globalThis;
		globalThis.window = undefined as unknown as typeof window;

		const env = lazyCreateEnv();

		expect(env).toMatchObject({
			NODE_ENV: "development",
			BAR: "bar",
			FOO_BAR: "foo",
		});

		globalThis.window = window;
	});

	test("client", () => {
		const { window } = globalThis;
		globalThis.window = {} as typeof window;

		const env = lazyCreateEnv();

		expect(() => env.BAR).toThrow(
			"❌ Attempted to access a server-side environment variable on the client",
		);
		expect(env.FOO_BAR).toBe("foo");
		expect(env.NODE_ENV).toBe("development");

		globalThis.window = window;
	});
});

test("envs are readonly", () => {
	const env = createEnv({
		server: { BAR: string() },
		runtimeEnv: { BAR: "bar" },
	});

	/**
	 * We currently don't enforce readonly during runtime:
	 * https://github.com/t3-oss/t3-env/pull/111#issuecomment-1682931526
	 */

	// expect(() => {
	//   // @ts-expect-error - envs are readonly
	//   env.BAR = "foo";
	// }).toThrow(
	//   '"Cannot assign to read only property BAR of object #<Object>"'
	// );

	// expect(env).toMatchObject({ BAR: "bar" });

	// @ts-expect-error - envs are readonly
	env.BAR = "foo";
	expect(env).toMatchObject({ BAR: "foo" });
});
