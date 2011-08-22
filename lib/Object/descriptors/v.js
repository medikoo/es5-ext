'use strict';

module.exports = function (get, set) {
	return set ?
		{ get: get, set: set }
	: { value: get };
};
