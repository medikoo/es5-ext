// Object.create ES3 way, no descriptors involved

'use strict';

var merge = require('./merge').call;

module.exports = function (proto, props) {
	var C, obj
	C = function () {};
	C.prototype = proto;
	obj = new C();
	return props ? merge(obj, props) : obj;
};
