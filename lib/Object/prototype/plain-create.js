// Object.create ES3 way, no descriptors involved

'use strict';

var merge = require('./merge');

module.exports = function (props) {
	var Constructor, obj
	Constructor = function () {};
	Constructor.prototype = this;
	obj = new Constructor();
	return props ? merge.call(obj, props) : obj;
};
