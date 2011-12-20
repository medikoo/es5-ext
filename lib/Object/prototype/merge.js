// Merge properties of one object into other.
// Property keys found in both objects will be overwritten.

'use strict';

var keys          = Object.keys
  , assertNotNull = require('../../assert-not-null')
  , merge;

merge = function (obj, key) {
	return (this[key] = obj[key]);
};

module.exports = function (arg) {
	assertNotNull(this);
	keys(arg).forEach(merge.bind(this, arg));
	return this;
};
