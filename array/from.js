'use strict';

var isArguments    = require('../function/is-arguments')
  , callable       = require('../object/valid-callable')
  , validValue     = require('../object/valid-value')

  , call = Function.prototype.call
  , hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function (arrayLike/*, mapFn, thisArg*/) {
	var mapFn = arguments[1], thisArg = arguments[2], Constructor, i, arr, l;

	validValue(arrayLike);

	if (!this || !Array.isPrototypeOf(this)) Constructor = Array;
	else Constructor = this;

	l = arrayLike.length >>> 0;
	if (mapFn != null) {
		callable(mapFn);
		arr = new Constructor(l);
		for (i = 0; i < l; ++i) {
			if (!hasOwnProperty.call(arrayLike, i)) continue;
			arr[i] = call.call(mapFn, thisArg, arrayLike[i]);
		}
		return arr;
	}

	if ((l !== 1) && isArguments(arrayLike)) {
		return Constructor.apply(null, arrayLike);
	}
	arr = new Constructor(l);
	for (i = 0; i < l; ++i) {
		if (!hasOwnProperty.call(arrayLike, i)) continue;
		arr[i] = arrayLike[i];
	}
	return arr;
};
