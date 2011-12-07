// Merge properties of one object into other.
// Property keys found in both objects will be overwritten.

'use strict';

var keys  = Object.keys
  , merge;

merge = function (obj, key) {
	return (this[key] = obj[key]);
};

module.exports = function (obj) {
	keys(obj).forEach(merge.bind(this, obj));
	return this;
};
