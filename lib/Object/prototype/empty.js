// Remove all object properties

'use strict';

var keys  = Object.keys
  , unset = require('./unset')

module.exports = function () {
	keys(this).forEach(unset, this);
	return this;
};
