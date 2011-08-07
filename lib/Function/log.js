// Return wrapper that will log calls of given functions

'use strict';

var f = require('./functionalize');

module.exports = f(function (log) {
	var fn = this;
	return function () {
		log.push(arguments);
		return fn.apply(this, arguments);
	};
});
