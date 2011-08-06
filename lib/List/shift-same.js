// Returns string left trimmed by characters that occurs at start of all other strings

'use strict';

var f     = require('../Function/functionalize')
  , slice = require('./slice').call
  , find  = require('./find-same-start-length').apply;

module.exports = f(function () {
	var i = find(this, arguments);
	return this.slice ? this.slice(i) : slice(this, i);
});
