// Whether object is regular expression

'use strict';

var toString = require('../Object/to-string/call')

  , id = toString(/a/);

module.exports = function (x) {
	if (!x) {
		return false;
	}
	return x instanceof RegExp || (toString(x) === id) || false;
};
