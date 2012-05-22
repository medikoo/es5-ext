'use strict';

var indexOf = require('./e-index-of');

module.exports = function (x) {
	return indexOf.call(this, x) > -1;
};
