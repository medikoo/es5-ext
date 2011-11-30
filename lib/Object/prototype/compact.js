// Return copy of object with removed falsy values

'use strict';

var filter = require('./filter')

module.exports = function (cb) {
	return filter.call(this, Boolean);
};
