'use strict';

module.exports = function (get, set) {
	return set ?
		{ get: get, set: set, enumerable: true }
	: { value: get, enumerable: true };
};
