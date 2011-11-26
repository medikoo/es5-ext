// Wrap function with logger

'use strict';

module.exports = function (log) {
	var fn = this;
	return function () {
		log.push(arguments);
		return fn.apply(this, arguments);
	};
};
