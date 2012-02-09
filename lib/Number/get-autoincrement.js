// Return function that on each call will return number incremented
// by given step

'use strict';

module.exports = function (start, step) {
	var i;
	step = (Number(step) || 1);
	i = ((Number(start) || step) - step);

	return function () {
		return (i += step);
	};
};
