// Merge properties of one object into other

'use strict';

var f    = require('../Function/functionalize')
  , link = require('./link').bind;

module.exports = f(function (b) {
	Object.keys(b).forEach(link(this, b));
	return this;
});
