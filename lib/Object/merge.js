// Merge properties of one object into other.
// Property keys found in both objects will be overwritten.

'use strict';

var keys          = Object.keys
  , assertNotNull = require('../assert-not-null')
  , merge;

merge = function (obj, key) {
	return (this[key] = obj[key]);
};

module.exports = function (obj, arg) {
	assertNotNull(obj);
	keys(arg).forEach(merge.bind(obj, arg));
	return obj;
};
