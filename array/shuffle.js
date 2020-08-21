"use strict";

var random         = Math.random
  , ensureIterable = require("type/iterable/ensure");

module.exports = function (input) {
	ensureIterable(input);

	// Make a clone of original array
	var array = input.slice(0);

	var sourceIndex = input.length;
	var destinationIndex = 0;

	// Pre-assign the size of array
	var shuffled = new Array(sourceIndex);

	while (sourceIndex) {
		// eslint-disable-next-line no-bitwise
		var randomIndex = (sourceIndex * random()) | 0;
		shuffled[destinationIndex++] = array[randomIndex];
		array[randomIndex] = array[--sourceIndex];
	}

	return shuffled;
};
