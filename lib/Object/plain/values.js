// Return array of object property values

'use strict';

var f   = require('../../Function/functionalize')
  , get = require('./get').bind;

module.exports = f(function () {
	return Object.keys(this).map(get(this));
});
