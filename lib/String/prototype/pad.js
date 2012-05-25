// Makes string at least n characters long.
// If it's shorter then it's padded with repeated pregiven string

'use strict';

var abs    = Math.abs
	, max    = Math.max
  , valid  = require('../../valid-value')
  , toInt  = require('../../Number/to-int')
  , repeat = require('./repeat');

module.exports = function (fill, length) {
	var self = valid(this) && String(this)
	  , sLength = self.length;
	length = toInt(length);
	fill = valid(fill) && repeat.call(String(fill), abs(length));
	if (length >= 0) {
		return fill.slice(0, max(0, length - sLength)) + self;
	} else {
		return self + (((sLength + length) >= 0) ? '' :
			fill.slice(length + sLength));
	}
};
