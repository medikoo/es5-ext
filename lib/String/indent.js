'use strict';

var repeat = require('./repeat');

module.exports = function (token) {
	if (!token) {
		token = '\t';
	}
	return function (str, nest) {
		var ltoken;
		if (nest == null) {
			nest = 1;
		} else if (!nest) {
			return str;
		}
		ltoken= repeat(token, nest);
		return ltoken + str.replace(/\n([^\n]+)/, function (match) {
			return '\n' + ltoken + match[1];
		});
	};
};
