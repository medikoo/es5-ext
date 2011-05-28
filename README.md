# es5-ext - ECMAScript5 extensions

Useful functions and objects that are not part of the standard.  
_It's work in progress, new methods are added when needed._

## Installation

Can be used in any environment that implements ES5.  
In implementations that are stuck to ES3 it will work with [es5-shim](https://github.com/kriskowal/es5-shim).

To use it with node:

	$ npm install es5-ext

## Usage

Recommended way is to require stuff you need individually:

	var sequence = require('es5-ext/lib/Function/sequence')
	  , merge = require('es5-ext/lib/Object/merge').call;

	sequence(...);
	merge(...);

but you can grab whole packs:

	var fnExt = require('es5-ext/lib/Function');

	fnExt.curry(...);
	fnExt.sequence(...);

and if you prefer take them all:

	var ext = require('es5-ext');

	ext.Function.curry(...);
	ext.Function.sequence(...);
	ext.Object.merge.call(...);

### Extensions

_For documentation look into source files._

* `global`
* `reserved`

#### Function

Many of the following are inspired by
http://osteele.com/sources/javascript/functional/

* `Function.bind(f)`
* `Function.call(f)`
* `Function.curry(f[, ...])`
* `Function.dscope(f, scope)`
* `Function.flip(f)`
* `Function.functionalize(f)`
* `Function.inherit(f, g)`
* `Function.invoke(methodName[, ...])`
* `Function.isFunction(x)`
* `Function.k(x)`
* `Function.s(f, g)`
* `Function.sequence(f[, ...])`

#### List

Extensions for Array-like objects

* `List.slice([begin[, end]])`
* `List.toArray()`

#### Object

* `Object.bindMethods([p])`
* `Object.elevate([p])`
* `Object.extend(o)`
* `Object.isObject(x)`
* `Object.isPlainObject()`
* `Object.link(p)`
* `Object.merge(p)`
* `Object.pluck(name)`
* `Object.set()`
* `Object.setTrue()`
* `Object.setValue(value)`
* `Object.values()`

## Tests

When using node &amp; npm

	$ make test

Tests with coverage report:

	$ make test-cov