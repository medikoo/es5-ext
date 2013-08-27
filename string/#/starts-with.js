'use strict';

var toUint = require('../../number/to-uint')

  , indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	var start = toUint(arguments[1]);
	return (indexOf.call(this, searchString, start) === start);
};
