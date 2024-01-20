import type { BaseSchema } from "valibot";

import {
	type ServerClientOptions,
	type StrictOptions,
	createEnv as createEnvCore,
} from "@nobara/core";

const CLIENT_PREFIX = "NEXT_PUBLIC_" as const;
type ClientPrefix = typeof CLIENT_PREFIX;

type Options<
	TServer extends Record<string, BaseSchema>,
	TClient extends Record<`${ClientPrefix}${string}`, BaseSchema>,
	TShared extends Record<string, BaseSchema>,
> = Omit<
	StrictOptions<ClientPrefix, TServer, TClient, TShared> &
		ServerClientOptions<ClientPrefix, TServer, TClient>,
	"runtimeEnvStrict" | "runtimeEnv" | "clientPrefix"
> &
	(
		| {
				/**
				 * Manual destruction of `process.env`. Required for Next.js < 13.4.4.
				 */
				runtimeEnv: StrictOptions<
					ClientPrefix,
					TServer,
					TClient,
					TShared
				>["runtimeEnvStrict"];
				experimental__runtimeEnv?: never;
		  }
		| {
				runtimeEnv?: never;
				/**
				 * Can be used for Next.js ^13.4.4 since they stopped static analysis of server side `process.env`.
				 * Only client side `process.env` is statically analyzed and needs to be manually destructured.
				 */
				experimental__runtimeEnv: Record<
					| {
							[TKey in keyof TClient]: TKey extends `${ClientPrefix}${string}`
								? TKey
								: never;
					  }[keyof TClient]
					| {
							[TKey in keyof TShared]: TKey extends string ? TKey : never;
					  }[keyof TShared],
					string | boolean | number | undefined
				>;
		  }
	);

export function createEnv<
	TServer extends Record<string, BaseSchema> = NonNullable<unknown>,
	TClient extends Record<
		`${ClientPrefix}${string}`,
		BaseSchema
	> = NonNullable<unknown>,
	TShared extends Record<string, BaseSchema> = NonNullable<unknown>,
>(opts: Options<TServer, TClient, TShared>) {
	const client = typeof opts.client === "object" ? opts.client : {};
	const server = typeof opts.server === "object" ? opts.server : {};
	const shared = opts.shared;

	const runtimeEnv = opts.runtimeEnv
		? opts.runtimeEnv
		: {
				...process.env,
				...opts.experimental__runtimeEnv,
		  };

	return createEnvCore<ClientPrefix, TServer, TClient, TShared>({
		...opts,
		shared,
		client,
		server,
		clientPrefix: CLIENT_PREFIX,
		runtimeEnv,
	});
}
