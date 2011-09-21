// Return function that on each call will return number incremented by one

module.exports = function (start, step) {
	var i;
	step = step || 1;
	i = (start || step) - step;

	return function () {
		return i += step;
	};
};
