import { describe, expect, test } from "vitest";

import { expectTypeOf } from "expect-type";
import { picklist, string, transform } from "valibot";
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
			server: {
				// @ts-expect-error - server should not have NEXT_PUBLIC_ prefix
				NEXT_PUBLIC_BAR: string(),
				BAR: string(),
			},
			client: {},
			runtimeEnv: {
				BAR: "foo",
			},
		});
	});
});

test("client vars should be correctly prefixed", () => {
	ignoreErrors(() => {
		createEnv({
			server: {},
			client: {
				NEXT_PUBLIC_BAR: string(),
				// @ts-expect-error - no NEXT_PUBLIC_ prefix
				BAR: string(),
			},
			runtimeEnv: {
				NEXT_PUBLIC_BAR: "foo",
			},
		});
	});
});

test("runtimeEnv enforces all keys", () => {
	createEnv({
		server: {},
		client: { NEXT_PUBLIC_BAR: string() },
		runtimeEnv: { NEXT_PUBLIC_BAR: "foo" },
	});

	createEnv({
		server: { BAR: string() },
		client: { NEXT_PUBLIC_BAR: string() },
		runtimeEnv: { BAR: "foo", NEXT_PUBLIC_BAR: "foo" },
	});

	createEnv({
		server: {},
		client: { NEXT_PUBLIC_BAR: string() },
		runtimeEnv: {
			NEXT_PUBLIC_BAR: "foo",
			// @ts-expect-error - FOO_BAZ is extraneous
			FOO_BAZ: "baz",
		},
	});

	ignoreErrors(() => {
		createEnv({
			server: { BAR: string() },
			client: { NEXT_PUBLIC_BAR: string() },
			// @ts-expect-error - BAR is missing
			runtimeEnvStrict: {
				NEXT_PUBLIC_BAR: "foo",
			},
		});
	});
});

test("new experimental runtime option only requires client vars", () => {
	ignoreErrors(() => {
		createEnv({
			server: { BAR: string() },
			client: { NEXT_PUBLIC_BAR: string() },
			// @ts-expect-error - NEXT_PUBLIC_BAR is missing
			experimental__runtimeEnv: {},
		});
		createEnv({
			server: { BAR: string() },
			client: { NEXT_PUBLIC_BAR: string() },
			experimental__runtimeEnv: {
				// @ts-expect-error - BAR should not be specified
				BAR: "bar",
			},
		});
	});

	process.env = {
		BAR: "bar",
		NEXT_PUBLIC_BAR: "foo",
		NODE_ENV: "development",
	};

	const env = createEnv({
		shared: {
			NODE_ENV: picklist(["development", "production"]),
		},
		server: { BAR: string() },
		client: { NEXT_PUBLIC_BAR: string() },
		experimental__runtimeEnv: {
			NODE_ENV: process.env.NODE_ENV,
			NEXT_PUBLIC_BAR: process.env.NEXT_PUBLIC_BAR,
		},
	});

	expectTypeOf(env).toEqualTypeOf<
		Readonly<{
			BAR: string;
			NEXT_PUBLIC_BAR: string;
			NODE_ENV: "development" | "production";
		}>
	>();

	expect(env).toMatchObject({
		BAR: "bar",
		NEXT_PUBLIC_BAR: "foo",
		NODE_ENV: "development",
	});
});

describe("return type is correctly inferred", () => {
	test("simple", () => {
		const env = createEnv({
			server: { BAR: string() },
			client: { NEXT_PUBLIC_BAR: string() },
			runtimeEnv: {
				BAR: "bar",
				NEXT_PUBLIC_BAR: "foo",
			},
		});

		expectTypeOf(env).toEqualTypeOf<
			Readonly<{
				BAR: string;
				NEXT_PUBLIC_BAR: string;
			}>
		>();

		expect(env).toMatchObject({
			BAR: "bar",
			NEXT_PUBLIC_BAR: "foo",
		});
	});

	test("with transforms", () => {
		const env = createEnv({
			server: { BAR: transform(string(), Number) },
			client: { NEXT_PUBLIC_BAR: string() },
			runtimeEnv: {
				BAR: "123",
				NEXT_PUBLIC_BAR: "foo",
			},
		});

		expectTypeOf(env).toEqualTypeOf<
			Readonly<{
				BAR: number;
				NEXT_PUBLIC_BAR: string;
			}>
		>();

		expect(env).toMatchObject({
			BAR: 123,
			NEXT_PUBLIC_BAR: "foo",
		});
	});
});

test("can specify only server", () => {
	const onlyServer = createEnv({
		server: { BAR: string() },
		runtimeEnv: { BAR: "FOO" },
	});

	expectTypeOf(onlyServer).toMatchTypeOf<{
		BAR: string;
	}>();

	expect(onlyServer).toMatchObject({
		BAR: "FOO",
	});
});

test("can specify only client", () => {
	const onlyClient = createEnv({
		client: { NEXT_PUBLIC_BAR: string() },
		runtimeEnv: { NEXT_PUBLIC_BAR: "FOO" },
	});

	expectTypeOf(onlyClient).toMatchTypeOf<{
		NEXT_PUBLIC_BAR: string;
	}>();

	expect(onlyClient).toMatchObject({
		NEXT_PUBLIC_BAR: "FOO",
	});
});
