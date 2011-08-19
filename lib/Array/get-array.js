// If given object is an Array return it, otherwise wrap it with array

'use strict';

var isArray = Array.isArray;

module.exports = function (x) {
	return isArray(x) ? x : ((typeof x === 'undefined') ? [] : [x]);
};
