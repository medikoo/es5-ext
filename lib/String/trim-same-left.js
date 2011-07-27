// Returns string left trimmed by characters that occurs at start of all other strings

'use strict';

var f    = require('../Function/functionalize')
  , find = require('./find-same-left').apply;

module.exports = f(function () {
	return this.slice(find(this, arguments));
});
