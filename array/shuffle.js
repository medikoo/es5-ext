"use strict";

var random = Math.random, isArray = Array.isArray;

module.exports = function (input) {
	if (!isArray(input)) throw new TypeError("input must be an Array, got " + typeof input + "!");

	// Make a clone of original array
	var $array = input.slice(0);

	var sourceIndex = input.length;
	var destinationIndex = 0;

	// Pre-assign the size of array
	var shuffled = new Array(sourceIndex);

	while (sourceIndex) {
		// eslint-disable-next-line no-bitwise
		var randomIndex = (sourceIndex * random()) | 0;
		shuffled[destinationIndex++] = $array[randomIndex];
		$array[randomIndex] = $array[--sourceIndex];
	}

	return shuffled;
};
