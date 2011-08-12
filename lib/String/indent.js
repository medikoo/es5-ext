'use strict';

var f      = require('../Function/functionalize')
  , global = require('../global')
  , repeat = require('./repeat').call;

module.exports = f(function () {
	var token = (this && (this !== global)) ? this : '\t';
	return f(function (nest, nostart) {
		var ltoken;
		if (nest == null) {
			nest = 1;
		} else if (!nest) {
			return this;
		}
		ltoken = repeat(token, nest);
		var r = (nostart ? '' : ltoken) + this.replace(/\n([^\n]+)/g, '\n' + ltoken + '$1');
		return r;
	});
});
