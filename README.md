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

_Each extension is documented at begin of its source file._

* `global`
* `reserved`

#### Function

Many of the following are inspired by
http://osteele.com/sources/javascript/functional/

* `Function.aritize(f, n)`
* `Function.bindApply(f)`
* `Function.bindBind(f)`
* `Function.bindCall(f)`
* `Function.curry(f[, ...])`
* `Function.dscope(f, scope)`
* `Function.flip(f)`
* `Function.functionalize(f)`
* `Function.inherit(f, g)`
* `Function.invoke(methodName[, ...])`
* `Function.isFunction(x)`
* `Function.k(x)`
* `Function.noop()`
* `Function.pluck(name)`
* `Function.s(f, g)`
* `Function.saturate(f)`
* `Function.sequence(f[, ...])`

#### List

Extensions for Array-like objects.

* `List.compact()`
* `List.concat([...])`
* `List.every(f[, o])`
* `List.filter(f[, o])`
* `List.flatten()`
* `List.forEach(f[, o])`
* `List.isList(x)`
* `List.map(f[, o])`
* `List.reduce(f[, x])`
* `List.slice([start[, end]])`
* `List.some(f[, o])`
* `List.toArray()`

#### Object

* `Object.bindMethods([p[, q]])`
* `Object.clone()`
* `Object.compare(p)`
* `Object.elevate([p])`
* `Object.every(f[, p])`
* `Object.extend(o)`
* `Object.filter(f[, p])`
* `Object.forEach(f[, p])`
* `Object.isEmpty()`
* `Object.isObject(x)`
* `Object.isPlainObject()`
* `Object.link(p)`
* `Object.map(f[, p])`
* `Object.merge(p)`
* `Object.pluck(name)`
* `Object.same()`
* `Object.setTrue()`
* `Object.setValue(value)`
* `Object.set()`
* `Object.values()`

#### String

##### Convertion methods

* `String.convert.dashToCamelCase(str)`

<!-- ## Tests -->

<!-- Before running tests make sure you have node and npm installed and you've run -->
<!-- _make install_ first. -->

<!-- 	$ make test -->

<!-- Tests with coverage report: -->

<!-- 	$ make test-cov -->
