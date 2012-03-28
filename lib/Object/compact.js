// Return copy of object with removed falsy values

'use strict';

var filter = require('./filter');

module.exports = function (obj) {
	return filter(obj, Boolean);
};
