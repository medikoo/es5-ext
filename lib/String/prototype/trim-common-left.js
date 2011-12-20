// Returns string left trimmed by characters that occurs at start of all
// other strings

'use strict';

var map      = Array.prototype.map
  , find     = require('../../Array/prototype/common-left')
  , toString = require('../../Function/invoke')('toString', null);

module.exports = function (str) {
	var self = String(this);
	return self.slice(find.apply(self, map.call(arguments, toString)));
};
