'use strict';

var map      = Array.prototype.map
  , valid    = require('../../valid-value')
  , find     = require('../../Array/prototype/common-left')
  , toString = require('../../Function/invoke')('toString', null);

module.exports = function (str) {
	var self = valid(this) && String(this);
	return self.slice(find.apply(self, map.call(arguments, toString)));
};
