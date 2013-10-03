'use strict';

var value = require('../../object/valid-value')

  , hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function () {
	var i, l;
	if (!(l = (value(this).length >>> 0))) return null;
	i = 0;
	while (!hasOwnProperty.call(this, i)) {
		if (++i === l) return null;
	}
	return i;
};
