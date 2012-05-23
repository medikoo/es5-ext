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
Simple and friendly implementation for common web application purpose. It's format is different from [official GUID format](http://en.wikipedia.org/wiki/Globally_unique_identifier)

### isPrimitive(x)

Whether given value is a primitive

### reserved

List of EcmaScript 5th edition reserved keywords.  
Additionally under _keywords_, _future_ and _futureStrict_ properties we have lists grouped thematically.

### validValue(x)

Throws error if given value is `null` or `undefined`, otherwise returns `true`.

## Array Constructor extensions

### Array.generate([length[, …fill]])

Generate an array of pregiven _length_ built of repeated arguments.

### Array.of([…items])

_In EcmaScript 6th Edition draft_  
Create an array from given arguments.

## Array Prototype extensions

### Array.prototype.binarySearch(compareFn)

In __sorted__ list search for index of item for which _compareFn_ returns value closest to _0_.  
It's variant of binary search algorithm

### Array.prototype.clear()

Clears the array

### Array.prototype.commonLeft([…lists])

Returns first index at which _lists_ start to differ

### Array.prototype.compact()

Returns a copy of the list with all falsy values removed.

### Array.prototype.contains(searchElement)

Whether list contains the given value.

### Array.prototype.copy()

Returns a copy of the list

### Array.prototype.diff(other)

Returns the array of elements that are present in context list but not present in other list.

### Array.prototype.eIndexOf(searchElement[, fromIndex])

[_egal_](http://wiki.ecmascript.org/doku.php?id=harmony:egal) version of `indexOf` method

### Array.prototype.exclusion([…lists]])

Returns the array of elements that are found only in context list or lists given in arguments.

### Array.prototype.find(query[, thisArg])

Return first element for which given function returns true

### Array.prototype.first()

Returns value for first declared index

### Array.prototype.firstIndex()

Returns first declared index of the array

### Array.prototype.flatten()

Returns flattened version of the array

### Array.prototype.forEachRight(cb[, thisArg])

`forEach` starting from last element

### Array.prototype.group(cb[, thisArg])

Group list elements by value returned by _cb_ function

### Array.prototype.indexesOf(searchElement[, fromIndex])

Returns array of all indexes of given value

### Array.prototype.intersection([…lists])

Computes the array of values that are the intersection of all lists (context list and lists given in arguments)

### Array.prototype.last()

Returns value for last declared index

### Array.prototype.lastIndex()

Returns last declared index of the array

### Array.prototype.remove(value)

Remove value from the array

### Array.prototype.someRight(cb[, thisArg])

`some` starting from last element

### Array.prototype.uniq()

Returns duplicate-free version of the array

## Boolean Constructor extensions

### Boolean.isBoolean(x)

Whether value is boolean

## Date Constructor extensions

### Date.isDate(x)

Whether value is date instance

## Date Prototype extensions

### Date.prototype.copy(date)

Returns a copy of the date object

### Date.prototype.daysInMonth()

Returns number of days of date's month

### Date.prototype.floorDay()

Sets the date time to 00:00:00.000

### Date.prototype.floorMonth()

Sets date day to 1 and date time to 00:00:00.000

### Date.prototype.floorYear()

Sets date month to 0, day to 1 and date time to 00:00:00.000

### Date.prototype.format(pattern)

Formats date up to given string. Supported patterns:

* `%Y` - Year with century, 1999, 2003
* `%y` - Year without century, 99, 03
* `%m` - Month, 01..12
* `%d` - Day of the month 01..31
* `%H` - Hour (24-hour clock), 00..23
* `%M` - Minute, 00..59
* `%S` - Second, 00..59
* `%L` - Millisedonc, 000..999

## Error Constructor extensions

### Error.isError(x)

Whether value is error.  
It returns true for all Error instances and Exception host instances (e.g. DOMException)

## Error Prototype extensions

### Error.prototype.throw()

Throws error

## Function Constructor extensions

### Function.arguments([…args])

Returns arguments object

### Function.context()

Return context in which function was called

_context.call(x) =def x_

### Function.i(arg)

Identity function. Returns first argument

_i(x) =def x_

### Function.insert(name, value)

Returns a function that will set _name_ to _value_ on given object

_insert(name, value)(obj) =def object[name] = value_

### Function.invoke(name[, …args])

Returns a function that takes an object as an argument, and applies object's
_name_ method to arguments.  
_name_ can be name of the method or method itself.

_invoke(name, …args)(object, …args2) =def  object[name](…args, …args2)_

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
