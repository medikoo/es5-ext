// Return array of object properties values

'use strict';

var get = require('./get');

module.exports = function (obj) {
	return Object.keys(obj).map(get(obj));
};
