import type { Opaque } from "opaque-type";
import { expectTypeOf, test } from "vitest";
import { type StringEncoded, stringify } from "./string-codec.ts";

test("returns proper types for literals", () => {
	expectTypeOf(stringify(1)).toMatchTypeOf<StringEncoded<number>>();
	expectTypeOf(stringify(1n)).toMatchTypeOf<StringEncoded<bigint>>();
});

type MyType = Opaque<number, "MyType">;
declare const myType: MyType;
test("returns proper types for opaque types", () => {
	expectTypeOf(stringify(myType)).toMatchTypeOf<StringEncoded<MyType>>();
});
