// In *sorted* list search for index of item that is closest by
// return of compareFn
// It's variant of binary search algorithm

'use strict';

var floor    = Math.floor
  , toObject = require('../../to-object');

module.exports = function (compareFn) {
	var low, high, middle, self;
	self = toObject(this);
	low = 0;
	high = self.length - 1;

	while (low <= high) {
		middle = floor((low + high)/2);
		if (compareFn(self[middle]) < 0) {
			high = middle - 1;
		} else {
			low = middle + 1;
		}
	}

	return high;
};
