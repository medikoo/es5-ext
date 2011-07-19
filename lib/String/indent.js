'use strict';

var f      = require('../Function/functionalize')
  , repeat = require('./repeat');

module.exports = f(function () {
	var token = this || '\t';

	return f(function (nest, nostart) {
		var ltoken;
		if (nest == null) {
			nest = 1;
		} else if (!nest) {
			return str;
		}
		ltoken = repeat(token, nest);
		return (nostart ? '' : ltoken) + this.replace(/\n([^\n]+)/, function (match) {
			return '\n' + ltoken + match[1];
		});
	});
});
