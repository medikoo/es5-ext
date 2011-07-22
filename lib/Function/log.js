// Return wrapper that will log calls of given functions

'use strict';

module.exports = function (fn, log) {
	return function () {
		log.push(arguments);
		return fn.apply(this, arguments);
	};
};
