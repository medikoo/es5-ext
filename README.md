# es5-ext - ECMAScript5 extensions

Useful functions and objects that are not part of the standard.  
_It's work in progress, new methods are added when needed._

## Installation

Can be used in any environment that implements ES5.  
In implementations that are stuck to ES3 it will work when shim (e.g. [es5-shim](https://github.com/kriskowal/es5-shim)) is introduced.

To use it with node:

	$ npm install es5-ext

## Usage

Recommended way:

	var curry = require('es5-ext/lib/Function/curry');

	curry(...)

or less specific:

	var objExt = require('es5-ext/lib/Object');

	objExt.merge(...)

and if you want to take them all:

	var ext = require('es5-ext');

	ext.Object.merge(...)
	ext.Function.curry(...)


### Extensions

For descriptions look into source files.

* `global`
* `reserved`

#### Array

* `Array.slice(obj[, begin[, end]])`
* `Array.toArray(obj)`

#### Function

Many of the following are inspired by
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

When using node &amp; npm

	$ npm test
