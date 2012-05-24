// Object.create ES3 way, no descriptors involved

'use strict';

var extend = require('./extend');

module.exports = function (obj, properties) {
	var Constructor, newObj;
	Constructor = function () {};
	Constructor.prototype = obj;
	newObj = new Constructor();
	return properties ? extend(newObj, properties) : newObj;
};
