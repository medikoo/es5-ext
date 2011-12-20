// Object.create ES3 way, no descriptors involved

'use strict';

var merge = require('./merge');

module.exports = function (properties) {
	var Constructor, obj
	Constructor = function () {};
	Constructor.prototype = this;
	obj = new Constructor();
	return properties ? merge.call(obj, properties) : obj;
};
