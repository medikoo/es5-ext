// Merge properties of one object into other

'use strict';

var link = require('./link');

module.exports = function (a, b) {
	Object.keys(b).forEach(link(a, b));
	return a;
};
