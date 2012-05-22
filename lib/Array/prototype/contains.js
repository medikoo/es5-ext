'use strict';

var indexOf = require('./index-of');

module.exports = function (x) {
	return indexOf.call(this, x) > -1;
};
