'use strict';

var isBoolean = require('../../Boolean/is-boolean')
  , isNumber  = require('../../Number/is-number')
  , toUint    = require('../../Number/to-uint')
  , value     = require('../../Object/valid-value')
  , repeat    = require('./repeat');

module.exports = function (indent, nest) {
	var self = String(value(this));
	if (isNumber(indent) || ((indent == null) && isBoolean(nest))) {
		nest = indent;
		indent = '\t';
	}
	nest = (nest == null) ? 1 : toUint(nest);
	if (!nest) {
		return self;
	}
	indent = repeat.call((indent == null) ? '\t' : String(indent), nest);
	return indent +
		self.replace(/(\r\n|[\n\r\u2028\u2029])([\u0000-\u0009\u000b-\uffff]+)/g,
			'$1' + indent + '$2');
};
