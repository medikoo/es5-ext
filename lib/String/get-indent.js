'use strict';

var repeat = require('./repeat').call;

module.exports = function (token) {
	if (!token) {
		token = '\t';
	}
	return function (nest, nostart) {
		var ltoken;
		if (nest == null) {
			nest = 1;
		} else if (!nest) {
			return this;
		}
		ltoken = repeat(token, nest);
		var r = (nostart ? '' : ltoken) + this.replace(/\n([^\n]+)/g, '\n' + ltoken + '$1');
		return r;
	};
};
