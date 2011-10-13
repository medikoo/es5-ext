// Return array of object property values

'use strict';

var keys = Object.keys
  , f    = require('../../Function/functionalize')
  , get  = require('./get').bind;

module.exports = f(function () {
	return keys(this).map(get(this));
});
