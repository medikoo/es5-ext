'use strict';

var isArguments = require('../../function/is-arguments')
  , callable    = require('../../object/valid-callable')
  , validValue  = require('../../object/valid-value')

  , isArray = Array.isArray, call = Function.prototype.call;

module.exports = function (arrayLike/*, mapFn, thisArg*/) {
	var mapFn = arguments[1], thisArg = arguments[2], Constructor
	  , i, arr, l, iterator, result;

	arrayLike = Object(validValue(arrayLike));

	if (!this || !Array.isPrototypeOf(this)) Constructor = Array;
	else Constructor = this;

	if (mapFn != null) callable(mapFn);
	if ((typeof arrayLike['@@iterator'] === 'function') && !isArray(arrayLike)) {
		arr = new Constructor();
		iterator = arrayLike['@@iterator']();
		result = iterator.next();
		i = 0;
		while (!result.done) {
			arr[i++] = mapFn ? call.call(mapFn, thisArg, result.value) : result.value;
			result = iterator.next();
		}
		return arr;
	}

	l = arrayLike.length >>> 0;
	if (mapFn != null) {
		arr = new Constructor(l);
		for (i = 0; i < l; ++i) {
			if (!(i in arrayLike)) continue;
			arr[i] = call.call(mapFn, thisArg, arrayLike[i]);
		}
		return arr;
	}

	if (Constructor === arrayLike.constructor) return arrayLike.slice();

	if (isArguments(arrayLike)) {
		if (l !== 1) return Constructor.apply(null, arrayLike);
		arr = new Constructor(1);
		arr[0] = arrayLike[0];
		return arr;
	}

	arr = new Constructor(l);
	for (i = 0; i < l; ++i) {
		if (!(i in arrayLike)) continue;
		arr[i] = arrayLike[i];
	}
	return arr;
};
