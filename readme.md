# string-codec

Encodes stringifiable objects into a string while retaining the original object type.

## Installation

```sh
npm install string-codec
```

## Usage

```ts
import * as stringCodec from "string-codec";

const encoded = stringCodec.stringify({
	key: "value",
});
// encoded = "{"key":"value"}"

const decoded = jsonCodec.parse(encoded);
// decoded = { key: "value" }
```

## Other codecs

- [json-codec](https://github.com/skyrpex/json-codec)
- [devalue-codec](https://github.com/skyrpex/devalue-codec)
- [superjson-codec](https://github.com/skyrpex/superjson-codec)
