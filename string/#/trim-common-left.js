'use strict';

var find     = require('../../array/#/common-left')
  , toString = require('../../function/invoke')('toString', null)
  , value    = require('../../object/valid-value')

  , map = Array.prototype.map;

module.exports = function (/*…str*/) {
	var self = String(value(this));
	return self.slice(find.apply(self, map.call(arguments, toString)));
};
