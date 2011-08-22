'use strict';

module.exports = function (get, set) {
	return set ?
		{ get: get, set: set, configurable: true, enumerable: true }
	: { value: get, configurable: true, enumerable: true };
};
