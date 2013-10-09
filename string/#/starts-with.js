'use strict';

var value = require('../../object/valid-value')
  , toInt = require('../../number/to-int')

  , max = Math.max, min = Math.min;

module.exports = function (searchString/*, position*/) {
	var start, self = String(value(this));
	start = min(max(toInt(arguments[1]), 0), self.length);
	return (self.indexOf(searchString, start) === start);
};
