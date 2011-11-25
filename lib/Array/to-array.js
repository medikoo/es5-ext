// Convert array-like object to an Array

'use strict';

var isArray     = Array.isArray
  , slice       = Array.prototype.slice
  , isArguments = require('../Function/is-arguments')

module.exports = function (list) {
	if (isArray(list)) {
		return list;
	} else if (isArguments(list)) {
		return (list.length === 1) ? [list[0]] : Array.apply(null, list);
	} else {
		return slice.call(list);
	}
};
