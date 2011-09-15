// In sorted list search for highest or lowest index of item that is
// smaller/greater (or same) as given value.
// It's variant of binary search algorithm

'use strict';

var floor         = Math.floor
  , isLess        = require('../../Number/is-less').call
  , isLessOrEqual = require('../../Number/is-less-or-equal').call

  , cache = {};

module.exports = function (equalMatches, searchHighest) {
	var operator;

	equalMatches = Boolean(equalMatches);
	searchHighest = Boolean(searchHighest);

	if (cache[equalMatches + '' + searchHighest]) {
		return cache[equalMatches + '' + searchHighest];
	}

	if (searchHighest) {
		operator = equalMatches ? isLess : isLessOrEqual;
	} else {
		operator = equalMatches ? isLessOrEqual : isLess;
	}

	return cache[equalMatches + '' + searchHighest] = function (compare, length) {
		var low, high, middle;
		low = 0;
		high = length - 1;


		while (low <= high) {
			middle = floor((low + high)/2);
			if (operator(compare(middle), 0)) {
				high = middle - 1;
			} else {
				low = middle + 1;
			}
		}

		return searchHighest ? high : low;
	};
};
