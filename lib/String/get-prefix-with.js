// Prefix string with other string

'use strict';

module.exports = function (prefix) {
	return function () {
		return prefix + String(this);
	};
};
