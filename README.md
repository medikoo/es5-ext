# es5-ext - ECMAScript5 extensions

Useful functions and objects that are not part of the standard.  
_It's work in progress, new methods are added when needed._

## Installation

Can be used in any environment that implements EcmaScript 5th edition.  
To make it work with EcmaScript 3, apply [es5-shim](https://github.com/kriskowal/es5-shim).

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

#### Array

Extensions for Array that can be used only on Array instances, these are mainly extensions that modify Array object in-place. For more generic extensions see List section.

* `Array.clone()`
* `Array.compact()`

#### Date

* `Date.clone()`
* `Date.duration(to)`
* `Date.format()`
* `Date.monthDaysCount()`

##### Day

* `Date.day.floor()`

##### Month

* `Date.month.floor()`

##### Year

* `Date.year.floor()`

#### Function

Many of the following are inspired by
http://osteele.com/sources/javascript/functional/

* `Function.applyBind(f)`
* `Function.aritize(n)`
* `Function.bindBind(f)`
* `Function.cache()`
* `Function.callBind(f)`
* `Function.clone()`
* `Function.curry([...])`
* `Function.dscope(scope)`
* `Function.flip()`
* `Function.functionalize(f)`
* `Function.getApplyArg(f)`
* `Function.hold([n, ...])`
* `Function.i(x)`
* `Function.invoke(methodName[, ...])`
* `Function.isFunction(x)`
* `Function.k(x)`
* `Function.lock([...])`
* `Function.log(log)`
* `Function.ncurry(n[, ...])`
* `Function.noop()`
* `Function.pluck(name)`
* `Function.rcurry([...])`
* `Function.rncurry(n[, ...])`
* `Function.s(f)`
* `Function.sequence([...])`

#### List

Extensions for Array-like objects.

* `List.compact()`
* `List.concat([...])`
* `List.every(f[, o])`
* `List.filter(f[, o])`
* `List.findSameStartLength(l[, ...])`
* `List.flatten()`
* `List.forEach(f[, o])`
* `List.isListObject(x)`
* `List.isList(x)`
* `List.map(f[, o])`
* `List.peek()`
* `List.reduce(f[, x])`
* `List.shiftSame(l[, ...])`
* `List.slice([start[, end]])`
* `List.some(f[, o])`
* `List.toArray()`

##### List.sort

Functions for sorting list objects

* `List.sort.length(l1, l2)`

#### Number

* `Number.pad(precision)`

#### Object

Following takes into account all ES5 goodies (not enumerable properties, descriptors). For more tradtional ES3 like stuff see Object.plain below

* `Object.bindMethods([p[, q]])`
* `Object.every(f[, p])`
* `Object.extend(o)`
* `Object.invoke(args)`
* `Object.mapToArray(cb[, scope])`
* `Object.mergeDeep(o)`
* `Object.merge(p)`
* `Object.pluck(name)`
* `Object.sameType(x)`
* `Object.same()`
* `Object.toDescriptor()`
* `Object.toDescriptors()`
* `Object.toString()`

#### Object.plain

Following are about hash'es (simple enumerable key value pairs)

* `Object.plain.clone()`
* `Object.plain.compare(p)`
* `Object.plain.elevate([p])`
* `Object.plain.every(f[, p])`
* `Object.plain.filter(f[, p])`
* `Object.plain.forEach(f[, p])`
* `Object.plain.isEmpty()`
* `Object.plain.isPlainObject()`
* `Object.plain.link(p)`
* `Object.plain.map(f[, p])`
* `Object.plain.merge(p)`
* `Object.plain.pluck(name)`
* `Object.plain.same()`
* `Object.plain.setTrue()`
* `Object.plain.setValue(value)`
* `Object.plain.set()`
* `Object.plain.values()`

#### String

* `String.endsWith(s)`
* `String.format(map)`
* `String.indent()`
* `String.pad(n)`
* `String.repeat(n)`
* `String.startsWith(s)`
* `String.trimLeftStr(s)`
* `String.trimRightStr(s)`

##### Convertion methods:

* `String.convert.dashToCamelCase(str)`

<!-- ## Tests -->

<!-- Before running tests make sure you have node and npm installed and you've run -->
<!-- _make install_ first. -->

<!-- 	$ make test -->

<!-- Tests with coverage report: -->

<!-- 	$ make test-cov -->
