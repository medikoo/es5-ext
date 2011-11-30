// Object.create ES3 way, no descriptors involved

'use strict';

var merge = require('./merge');

module.exports = function (props) {
	var C, obj
	C = function () {};
	C.prototype = this;
	obj = new C();
	return props ? merge.call(obj, props) : obj;
};
