// Whether strings starts with given string

'use strict';

var indexOf = String.prototype.indexOf;

module.exports = function (searchString) {
	return indexOf.call(this, searchString) === 0;
};
