// Convert array like object to an Array

'use strict';

var f = require('../Function/functionalize')
  , slice = require('./slice').call;

module.exports = f(function () {
	return slice(this);
});
