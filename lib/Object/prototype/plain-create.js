// Object.create ES3 way, no descriptors involved

'use strict';

var merge = require('../plain/merge').call;

module.exports = function (props) {
	var C, obj
	C = function () {};
	C.prototype = this;
	obj = new C();
	return props ? merge(obj, props) : obj;
};
