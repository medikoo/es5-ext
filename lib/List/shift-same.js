// Returns string left trimmed by characters that occurs at start of all other strings

'use strict';

var f     = require('../Function/functionalize')
  , slice = require('./slice/call')
  , find  = require('../Array/prototype/common-left');

module.exports = f(function () {
	var i = find.apply(this, arguments);
	return this.slice ? this.slice(i) : slice(this, i);
});
