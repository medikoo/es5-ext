// Generate incremented id

'use strict';

module.exports = function (prefix, postfix) {
	var index = -1;
	prefix = prefix ? String(prefix) : '';
	postfix = postfix ? String(postfix) : '';
	return function () {
		return prefix + (++index).toString(36) + postfix;
	};
};
