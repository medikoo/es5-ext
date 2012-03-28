// Return copy of object with removed falsy values

'use strict';

var filter = require('./prototype/filter');

module.exports = function (obj) {
	return filter.call(obj, Boolean);
};
