# es5-ext - ECMAScript5 extensions

Methods, functions and objects that are not part of the standard, written with
EcmaScript conventions in mind.

## Installation

Can be used in any environment that implements EcmaScript 5th edition.  
Many extensions will also work with ECMAScript 3rd edition, if they're not let [es5-shim](https://github.com/kriskowal/es5-shim) be your aid.

To use it with node.js:

	$ npm install es5-ext

For browser, you can create custom toolset with help of
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

As with native ones most methods are generic and can be run on any object.
In more detail:

* `Array.prototype` methods can be run on any object (any
value that's neither _null_ nor _undefined_),
* `Date.prototype` methods should be called only on `Date` instances.
* `Function.prototype` methods can be called on any callable objects (not
necessarily functions)
* `Number.prototype` & `String.prototype` methods can be called on any value, in
case of Number it’ll be degraded to number, in case of string it’ll be
degraded to string.

API doesn't provide any methods for `Object.prototype` as extending such in any case should be avoided. All `Object` utils are provided as fuctions.

# API

## Global extensions

### global

Object that represents global scope

### guid()

Returns globally unique identifier, it is string starting with digit and followed by any characters from _0-9_ and _a-z_ range. Length of string is 9 characters but may increase over time.
Simple and friendly implementation for common web application purpose.  
It's format is different from [official GUID format](http://en.wikipedia.org/wiki/Globally_unique_identifier)

### isPrimitive(x)

Whether given value is a primitive

### reserved

List of EcmaScript 5th edition reserved keywords.  
Additionally under _keywords_, _future_ and _futureStrict_ properties we have lists grouped thematically.

### validValue(x)

Throws error if given value is `null` or `undefined`, otherwise returns `true`.

## Array Constructor extensions

### Array.generate([length[, fill0[, fill1[, ...]]]])

Generate an array of pregiven _length_ built of repeated arguments.

### Array.of([item0[, item1[, ...]]]) _(ES 6th Edition draft)_

Create an array from given arguments.

## Array Prototype extensions

### Array.prototype.binarySearch(compareFn)

In __sorted__ list search for index of item for which _compareFn_ returns value closest to _0_.  
It's variant of binary search algorithm

### Array.prototype.clear()

Clears the array

### Array.prototype.commonLeft(list0[, list1[, ...]])

Returns first index at which _lists_ start to differ

### Array.prototype.compact()

Returns a copy of the array with all falsy values removed.

### Array.prototype.contains(searchElement)

Whether list contains the given value.

### Array.prototype.copy()
### Array.prototype.diff(other)
### Array.prototype.exclusion(list0[, list1[, ...]])
### Array.prototype.find(query[, thisArg])
### Array.prototype.first()
### Array.prototype.firstIndex()
### Array.prototype.flatten()
### Array.prototype.forEachRight(cb[, thisArg])
### Array.prototype.group(cb[, thisArg])
### Array.prototype.indexOf(searchElement[, fromIndex])
### Array.prototype.indexesOf(searchElement[, fromIndex])
### Array.prototype.intersection(list0[, list1[, ...]])
### Array.prototype.last()
### Array.prototype.lastIndex()
### Array.prototype.remove(value)
### Array.prototype.someRight(cb[, thisArg])
### Array.prototype.someValue(cb[, thisArg])
### Array.prototype.uniq()

## Boolean Constructor extensions

### Boolean.isBoolean(arg)

## Date Constructor extensions

### Date.getFormat(pattern)
### Date.isDate(arg)

## Date Prototype extensions

### Date.prototype.copy(date)
### Date.prototype.daysInMonth()
### Date.prototype.duration([to])
### Date.prototype.floorDay()
### Date.prototype.floorMonth()
### Date.prototype.floorYear()

## Error Constructor extensions

### Error.isError(arg)

## Error Prototype extensions

### Error.prototype.throw()

## Function Constructor extensions

### Function.arguments([arg0[, arg1[, ...]])
### Function.context()
### Function.i(arg)
### Function.insert(name, value)
### Function.invoke(name[, arg0[, arg1[, ...]]])
### Function.isArguments(arg)
### Function.isFunction(arg)
### Function.k(arg)
### Function.memoize(fn[, length[, resolvers]])
### Function.noop()
### Function.pluck(name)
### Function.remove(name)

## Function Prototype extensions

### Function.prototype.aritize(n)
### Function.prototype.chain(fn0[, fn1[, ...]])
### Function.prototype.curry([n])
### Function.prototype.flip()
### Function.prototype.lock([arg0[, arg1[, ...])
### Function.prototype.match()
### Function.prototype.not()
### Function.prototype.partial([arg0[, arg1[, ...])
### Function.prototype.s(fn)
### Function.prototype.silent([arg0[, arg1[, ...])
### Function.prototype.wrap(fn)

## Math Object extensions

### Math.sign(n)

## Number Constructor extensions

### Number.getAutoincrement(start, step)
### Number.getPad(length[, precision])
### Number.isNaN(arg)
### Number.isNumber(arg)
### Number.toInteger(arg)
### Number.toUint32(arg)

## Number Prototype extensions

### Number.prototype.isLessOrEqual(n)
### Number.prototype.isLess(n)
### Number.prototype.subtract(n)

## Object Constructor extensions

### Object.assertCallable(arg)
### Object.bindMethods(obj[, context[, source]])
### Object.compact(obj)
### Object.clear(obj)
### Object.clone(obj)
### Object.compare(arg1, arg2)
### Object.copy(obj[, deep])
### Object.count(obj)
### Object.descriptor
### Object.diff(obj1, obj2)
### Object.extend(obj, [properties])
### Object.every(obj, cb[, thisArg[, compareFn]])
### Object.filter(obj, cb[, thisArg])
### Object.flatten(obj)
### Object.forEach(obj, cb[, thisArg[, compareFn]])
### Object.get(obj, key)
### Object.getCompareBy(name)
### Object.getPropertyNames()
### Object.getSet(value)
### Object.is(x, y)
### Object.isCallable(arg)
### Object.isCopy(obj1, obj2)
### Object.isEmpty(obj)
### Object.isList(arg)
### Object.isObject(arg)
### Object.isPlainObject(arg)
### Object.keyOf(obj, searchValue)
### Object.map(obj, cb[, thisArg])
### Object.mapKeys(obj, cb[, thisArg])
### Object.mapToArray(obj[, cb[, thisArg[, compareFn]]])
### Object.merge(obj, arg)
### Object.mergeProperties(obj, arg)
### Object.override(obj, properties)
### Object.plainCreate(obj[, properties])
### Object.plainExtend(obj[, properties])
### Object.set(obj, key, value)
### Object.some(obj, cb[, thisArg[, compareFn]])
### Object.toArray(obj)
### Object.unset(obj, key)
### Object.values(obj)

## RegExp Constructor extensions

### RegExp.isRegExp(arg)

## String Constructor extensions

### String.getFormat(map)
### String.getIndent(indentString)
### String.getPad(fill[, n])
### String.getPrefixWith(prefix)
### String.isString(arg)

## String Prototype extensions

### String.prototype.caseInsensitiveCompare(str)
### String.prototype.contains(searchString)
### String.prototype.dashToCamelCase()
### String.prototype.endsWith()
### String.prototype.isNumeric()
### String.prototype.last()
### String.prototype.repeat()
### String.prototype.startsWith()
### String.prototype.trimCommonLeft(str0[, str1[, ...]])

## Tests

	$ npm test
