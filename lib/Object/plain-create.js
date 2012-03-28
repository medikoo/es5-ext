// Object.create ES3 way, no descriptors involved

'use strict';

var merge = require('./merge');

module.exports = function (obj, properties) {
	var Constructor, newObj;
	Constructor = function () {};
	Constructor.prototype = obj;
	newObj = new Constructor();
	return properties ? merge(newObj, properties) : newObj;
};
