// Whether strings starts with given string

'use strict';

var indexOf = String.prototype.indexOf;

module.exports = function (needle) {
	return indexOf.call(this, needle) === 0;
};
