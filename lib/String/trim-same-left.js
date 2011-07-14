// Returns string left trimmed by characters that occurs at start of both strings

'use strict';

var every = require('../List/every').call;

module.exports = function (str, str2) {
	var index = 0;
	every(str, function (char, i) {
		if (char === str2[i]) {
			++index;
			return true;
		} else {
			return false;
		}
	});
	return str.slice(index);
};
