// Return copy of list

'use strict';

var isArray = Array.isArray
  , toArray = require('../to-array');

module.exports = function () {
	return isArray(this) ? this.slice(0) : toArray(this);
};
