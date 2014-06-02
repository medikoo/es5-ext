'use strict';

var value = require('../../object/valid-value')

  , abs = Math.abs
  , re = /(\.[0-9e]+)$/;

module.exports = function () {
	var num = Number(value(this)), sign;
	if (isNaN(num)) return NaN;
	if (!(num % 1)) return 0;
	if (num > 0) {
		if (num < 1) return num;
		sign = 1;
	} else {
		if (num > -1) return num;
		sign = -1;
		num = abs(num);
	}
	return sign * Number(String(num).match(re)[1]);
};
