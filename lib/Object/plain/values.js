// Return array of object property values

'use strict';

var f     = require('../../Function/functionalize')
  , pluck = require('./pluck').bind;

module.exports = f(function () {
	return Object.keys(this).map(pluck(this));
});
