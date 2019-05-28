# ext

_(Previously known as `es5-ext`)_

## JavaScript standard extensions (with respect to evolving standard)

Non-standard or soon to be standard language utilities in a future proof, non-invasive form.

Doesn't enforce transpilation step. Where it's applicable utilities/extensions are safe to use in all ES3+ implementations.

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

globalThis.Array === Array; // true
```

#### Function

##### `Function.identity` _(ext/function/identity)_

Returns input argument.

```javascript
const identity = require("ext/function/identity");

identity("foo"); // "foo"
```

#### Thenable.prototype

##### `thenable.finally` _(ext/thenable\_/finally)_

`finally` method for any _thenable_ input

```javascript
const finally = require("ext/thenable_/finally");

finally.call(thenable, () => console.log("Thenable resolved"));
```
