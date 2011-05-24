// Convert array like object to an Array

'use strict';

var slice = Array.prototype.slice;

module.exports = function (obj) {
	return slice.call(obj);
};
