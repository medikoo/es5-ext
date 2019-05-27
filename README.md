# ext

## JavaScript standard extensions (with respect to emerging ES+ additions)

Provides missing non-standard or soon to be standard language features in non-invasive form.

Doesn't enforce transpilation step. Where it's applicable all utilities/extensions are safe to use in all ES3+ implementations.

### Installation

```bash
npm install ext
```

### Extensions

#### `ext/global-this`

Returns global object. Resolve native [globalThis](https://github.com/tc39/proposal-global) if implemented, otherwise fallback to internal resolution of a global object.
