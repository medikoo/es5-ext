// Whether strings ends with given string

'use strict';

module.exports = function (haystack, needle) {
	return haystack.lastIndexOf(needle) === (haystack.length - needle.length);
};
