# es5-ext - ECMAScript5 extensions

Methods, functions and objects that are not part of the standard, written with
EcmaScript conventions in mind.

## Installation

Can be used in any environment that implements EcmaScript 5th edition.  
Many extensions will also work with ECMAScript 3rd edition, if they're not let [es5-shim](https://github.com/kriskowal/es5-shim) be your aid.

To use it with node.js:

	$ npm install es5-ext

For browser, you can easily create custom toolset with help of
[modules-webmake](https://github.com/medikoo/modules-webmake)

## Usage

__es5-ext__ mostly offer methods (not functions) which can directly be
assigned to native object's prototype:

	Function.prototype.curry = require('es5-ext/lib/Function/prototype/curry');

	Array.prototype.flatten = require('es5-ext/lib/Array/prototype/flatten');

	String.prototype.startsWith = require('es5-ext/lib/String/prototype/starts-with');

However, extending native prototypes is controversial and in general discouraged,
most will agree that __it's ok only if we own the context__ (see
[extending-javascript-natives](http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/)
for more views on that matter).  
So when you don't want to extend native prototypes you can use methods as
functions:

	var util = {};
	var call = Function.prototype.call;

	util.curry = call.bind(require('es5-ext/lib/Function/prototype/curry'));

	util.flatten = call.bind(require('es5-ext/lib/Array/prototype/flatten'));

	util.startsWith = call.bind(require('es5-ext/lib/String/prototype/starts-with'));

### API

As with native ones most methods are generic and can be run on any object.
In more detail:

* `Array.prototype` and `Object.prototype` methods can be run on any object (any
value that's neither _null_ nor _undefined_),
* `Date.prototype` methods should be called only on `Date` instances.
* `Function.prototype` methods can be called on any callable objects (not
necessarily functions)
* `Number.prototype` & `String.prototype` methods can be called on any value, in
case of Number it it’ll be degraded to number, in case of string it’ll be
degraded to string.

_Each extension is documented at begin of its source file._

* `assertNotNull(arg)`
* `getNextIdGenerator([prefix[, postfix]])`
* `global`
* `guid()`
* `isEqual(arg0, arg1)`
* `isPrimitive(arg)`
* `reserved`
* `toObject(arg)`

#### Array

* `Array.generate(length, fill0[, fill1[, ...]])`

#### Array.prototype

* `Array.prototype.binarySearch(compareFn)`
* `Array.prototype.clear()`
* `Array.prototype.commonLeft(list0[, list1[, ...]])`
* `Array.prototype.compact()`
* `Array.prototype.contains(searchElement)`
* `Array.prototype.copy()`
* `Array.prototype.diff(other)`
* `Array.prototype.exclusion(list0[, list1[, ...]])`
* `Array.prototype.find(query[, thisArg])`
* `Array.prototype.first()`
* `Array.prototype.firstIndex()`
* `Array.prototype.flatten()`
* `Array.prototype.forEachRight(cb[, thisArg])`
* `Array.prototype.group(cb[, thisArg])`
* `Array.prototype.indexesOf(searchElement[, fromIndex])`
* `Array.prototype.intersection(list0[, list1[, ...]])`
* `Array.prototype.peek()`
* `Array.prototype.remove(value)`
* `Array.prototype.someRight(cb[, thisArg])`
* `Array.prototype.someValue(cb[, thisArg])`
* `Array.prototype.uniq()`

#### Boolean

* `Boolean.isBoolean(arg)`

#### Date

* `Date.getFormat(pattern)`
* `Date.isDate(arg)`

#### Date.prototype

* `Date.prototype.copy(date)`
* `Date.prototype.duration(to)`
* `Date.prototype.floorDay()`
* `Date.prototype.floorMonth()`
* `Date.prototype.floorYear()`
* `Date.prototype.monthDaysCount()`

#### Error

* `Error.isError(arg)`

##### Error.prototype

* `Error.prototype.throw()`

#### Function

* `Function.arguments([arg0[, arg1[, ...]])`
* `Function.context()`
* `Function.i(arg)`
* `Function.insert(name, value)`
* `Function.invoke(name[, arg0[, arg1[, ...]]])`
* `Function.isArguments(arg)`
* `Function.isFunction(arg)`
* `Function.k(arg)`
* `Function.memoize(fn[, length[, resolvers]])`
* `Function.noop()`
* `Function.pluck(name)`
* `Function.remove(name)`

#### Function.prototype

* `Function.prototype.aritize(n)`
* `Function.prototype.chain(fn0[, fn1[, ...]])`
* `Function.prototype.flip()`
* `Function.prototype.hold([n[, arg0[, arg1[, ...]]]])`
* `Function.prototype.lock([arg0[, arg1[, ...])`
* `Function.prototype.log(log)`
* `Function.prototype.match()`
* `Function.prototype.ncurry([n[, arg0[, arg1[, ...]])`
* `Function.prototype.not()`
* `Function.prototype.partial([arg0[, arg1[, ...])`
* `Function.prototype.rcurry([arg0[, arg1[, ...])`
* `Function.prototype.rncurry([n[, arg0[, arg1[, ...]])`
* `Function.prototype.s(fn)`
* `Function.prototype.silent([arg0[, arg1[, ...])`

#### Number

* `Number.getAutoincrement(start, step)`
* `Number.getPad(length[, precision])`
* `Number.isNumber(arg)`

#### Number.prototype

* `Number.prototype.isLessOrEqual(n)`
* `Number.prototype.isLess(n)`
* `Number.prototype.subtract(n)`

#### Object

* `Object.assertCallable(arg)`
* `Object.bindMethods(obj[, context[, source]])`
* `Object.compact(obj)`
* `Object.clear(obj)`
* `Object.clone(obj)`
* `Object.compare(arg1, arg2)`
* `Object.copy(obj[, deep])`
* `Object.count(obj)`
* `Object.descriptor`
* `Object.diff(obj1, obj2)`
* `Object.extend(obj, [properties])`
* `Object.every(obj, cb[, thisArg[, compareFn[, byKeys]]])`
* `Object.filter(obj, cb[, thisArg])`
* `Object.flatten(obj)`
* `Object.forEach(obj, cb[, thisArg[, compareFn[, byKeys]]])`
* `Object.get(obj, key)`
* `Object.getCompareBy(name)`
* `Object.getPropertyNames()`
* `Object.getSet(value)`
* `Object.isCallable(arg)`
* `Object.isDuplicate(obj1, obj2)`
* `Object.isEmpty(obj)`
* `Object.isList(arg)`
* `Object.isObject(arg)`
* `Object.isPlainObject(arg)`
* `Object.keyOf(obj, searchValue)`
* `Object.map(obj, cb[, thisArg])`
* `Object.mapKeys(obj, cb[, thisArg[, compareFn[, byKeys]]])`
* `Object.mapToArray(obj[, cb[, thisArg[, compareFn[, byKeys]]]])`
* `Object.merge(obj, arg)`
* `Object.mergeProperties(obj, arg)`
* `Object.override(obj, properties)`
* `Object.plainCreate(obj[, properties])`
* `Object.plainExtend(obj[, properties])`
* `Object.set(obj, key, value)`
* `Object.some(obj, cb[, thisArg[, compareFn[, byKeys]]])`
* `Object.toArray(obj)`
* `Object.unset(obj, key)`
* `Object.values(obj)`

#### RegExp

* `RegExp.isRegExp(arg)`

#### String

* `String.getFormat(map)`
* `String.getIndent(indentString)`
* `String.getPad(fill[, n])`
* `String.getPrefixWith(prefix)`
* `String.isString(arg)`

#### String.prototype

* `String.prototype.caseInsensitiveCompare(str)`
* `String.prototype.contains(searchString)`
* `String.prototype.dashToCamelCase()`
* `String.prototype.endsWith()`
* `String.prototype.isNumeric()`
* `String.prototype.repeat()`
* `String.prototype.startsWith()`
* `String.prototype.trimCommonLeft(str0[, str1[, ...]])`

## Tests

Before running tests make sure you've installed project with dev dependiencies
`npm install --dev`

	$ npm test
