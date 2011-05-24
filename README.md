# es5-ext - ECMAScript5 extensions

Useful functions and objects that are not part of the standard.
It's work in progress, new methods are added when needed.

## Installation

Can be used in any environment that implements ES5.
In ES3 most of it will work with shim (e.g. [es5-shim](https://github.com/kriskowal/es5-shim)) introduced.

To use it with node:

	$ npm install es5-ext

## Usage

	var ext = require('es5-ext');
	ext.Object.merge(...)
	ext.Function.curry(...)

or more specific:

	var objectExt = require('es5-ext/lib/Object');
	objectExt.merge(...)

	// my recommendation:
	var curry = require('es5-ext/lib/Function/curry');
	curry(...)

### Extensions

* `global`
* `reserved`

#### Array

* `Array.slice(obj[, begin[, end]])`
* `Array.toArray(obj)`

#### Function

Many of following are inspired by
http://osteele.com/sources/javascript/functional/

* `Function.K(obj)`
* `Function.S(f, g)`
* `Function.bindMethods(obj[, scope])`
* `Function.call(f)`
* `Function.curry(f[, ...])`
* `Function.flip(f)`
* `Function.invoke(methodName[, ...])`
* `Function.isFunction(x)`
* `Function.sequence(f[, ...])`

#### Object

* `Object.elevate(obj[, res])`
* `Object.get(obj)`
* `Object.isObject(x)`
* `Object.isPlainObject(x)`
* `Object.link(obja, objb)`
* `Object.merge(target, source)`
* `Object.set(obj)`
* `Object.setTrue(obj)`
* `Object.setValue(obj, value)`
* `Object.values(obj)`

## Tests

Using node &amp; npm:

	$ npm test
