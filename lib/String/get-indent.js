'use strict';

var replace = String.prototype.replace
  , repeat  = require('./prototype/repeat');

module.exports = function (indentString) {
	if (!indentString) {
		indentString = '\t';
	}
	return function (nest, nostart) {
		var ltoken, r;
		if (nest == null) {
			nest = 1;
		} else if (!nest) {
			return String(this);
		}
		ltoken = repeat.call(indentString, nest);
		return (nostart ? '' : ltoken) +
			replace.call(this, /\n([^\n]+)/g, '\n' + ltoken + '$1');
	};
};
