# ext

## JavaScript standard extensions (with respect to emerging ES+ additions)

Provides missing non-standard or soon to be standard language features in non-invasive form.

Doesn't enforce transpilation step. Where it's applicable all utilities/extensions are safe to use in all ES3+ implementations.

### Installation

```bash
npm install ext
```

### Utilities

#### Global

##### `globalThis` _(ext/global-this)_

Returns global object. Resolve native [globalThis](https://github.com/tc39/proposal-global) if implemented, otherwise fallback to internal resolution of a global object.

```javascript
const globalThis = require("ext/global-this");

console.log(globalThis.Array === Array); // true
```

#### Thenable.prototype

##### `thenable.finally` _(ext/thenable\_/finally)_

`finally` method for any _thenable_ input

```javascript
const finally = require("ext/thenable_/finally");

finally.call(thenable, () => console.log("Thenable resolved"));
```
