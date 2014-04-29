'use strict';

var iteratorSymbol = require('es6-symbol').iterator
  , isArguments    = require('../../function/is-arguments')
  , toPosInt       = require('../../number/to-pos-integer')
  , callable       = require('../../object/valid-callable')
  , validValue     = require('../../object/valid-value')
  , isString       = require('../../string/is-string')

  , isArray = Array.isArray, call = Function.prototype.call;

module.exports = function (arrayLike/*, mapFn, thisArg*/) {
	var mapFn = arguments[1], thisArg = arguments[2], Constructor, i, j, arr, l, char, code, iterator
	  , result, getIterator;

	arrayLike = Object(validValue(arrayLike));

	if (!this || !Array.isPrototypeOf(this)) Constructor = Array;
	else Constructor = this;
	if (mapFn != null) callable(mapFn);

	if (!isArray(arrayLike)) {
		if ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {
			arr = new Constructor();
			iterator = callable(getIterator).call(arrayLike);
			result = iterator.next();
			i = 0;
			while (!result.done) {
				arr[i] = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
				result = iterator.next();
				++i;
			}
			return arr;
		}
		if (isString(arrayLike)) {
			l = arrayLike.length;
			arr = new Constructor();
			for (i = 0, j = 0; i < l; ++i) {
				char = arrayLike[i];
				if ((i + 1) < l) {
					code = char.charCodeAt(0);
					if ((code >= 0xD800) && (code <= 0xDBFF)) char += arrayLike[++i];
				}
				arr.push(mapFn ? call.call(mapFn, thisArg, char, j++) : char);
			}
			return arr;
		}
	}

	l = toPosInt(arrayLike.length);
	if (mapFn != null) {
		arr = new Constructor(l);
		for (i = 0; i < l; ++i) arr[i] = call.call(mapFn, thisArg, arrayLike[i], i);
		return arr;
	}

	if (isArguments(arrayLike)) {
		if (l !== 1) return Constructor.apply(null, arrayLike);
		arr = new Constructor(1);
		arr[0] = arrayLike[0];
		return arr;
	}

	arr = new Constructor(l);
	for (i = 0; i < l; ++i) arr[i] = arrayLike[i];
	return arr;
};
