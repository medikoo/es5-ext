// Whether strings starts with given string

'use strict';

module.exports = function (haystack, needle) {
	return haystack.indexOf(needle) === 0;
};
