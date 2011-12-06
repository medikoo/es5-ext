// Whether strings starts with given string

'use strict';

module.exports = function (needle) {
	return String(this).indexOf(needle) === 0;
};
