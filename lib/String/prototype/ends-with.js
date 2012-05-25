'use strict';

var min = Math.min
  , valid = require('../../valid-value')
  , toUint = require('../../Number/to-uint');

module.exports = function (searchString) {
	var self, start, endPos;
	self = valid(this) && String(this);
	searchString = String(searchString);
	endPos = arguments[1];
	start = ((endPos == null) ? self.length : min(toUint(endPos), self.length))
		- searchString.length;
	return (start < 0) ? false : (self.indexOf(searchString, start) === start);
};
