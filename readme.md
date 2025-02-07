# @skyrpex/string-codec

Encodes stringifiable objects into a string while retaining the original object type.

> In contrast to other codecs, this codec doesn't know how to parse the encoded string.

## Installation

```sh
npm install @skyrpex/string-codec
```

## Usage

```ts
import { stringify } from "@skyrpex/string-codec";

const encodedNumber = stringify(7777); // typeof encodedNumber = StringEncoded<number>
const encodedBigInt = stringify(7777n); // typeof encodedBigInt = StringEncoded<bigint>

const number = Number(encodedNumber); // number = 7777
const bigint = BigInt(encodedBigInt); // bigint = 7777n
```

## Other codecs

- [json-codec](https://github.com/skyrpex/json-codec)
- [devalue-codec](https://github.com/skyrpex/devalue-codec)
- [superjson-codec](https://github.com/skyrpex/superjson-codec)
