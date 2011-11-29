// Return copy of object with removed falsy values

'use strict';

var filter = require('../plain/filter')

module.exports = function (cb) {
	return filter.call(this, Boolean);
};
