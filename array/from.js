'use strict';

var isArguments = require('../function/is-arguments')
  , callable    = require('../object/valid-callable')
  , validValue  = require('../object/valid-value')

  , map = Array.prototype.map, slice = Array.prototype.slice;

module.exports = function (arrayLike/*, mapFn, thisArg*/) {
	var mapFn = arguments[1], thisArg = arguments[2];

	validValue(arrayLike);
	if (mapFn != null) return map.call(arrayLike, callable(mapFn), thisArg);

	if (isArguments(arrayLike)) {
		return (arrayLike.length === 1) ? [arrayLike[0]] :
				Array.apply(null, arrayLike);
	}
	return slice.call(arrayLike);
};
