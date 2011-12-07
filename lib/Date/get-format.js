// Returns formatting function that would turn date into string
// with predefined pattern. Inspired by Ruby's and Python solutions
//
// Y - Year with century, 1999, 2003
// y - Year without century, 99, 03
// m - Month, 01..12
// d - Day of the month, 01..31
// H - Hour (24-hour clock), 00..23
// M - Minute, 00..59
// S - Second, 00..59
// L - Millisecond, 000..999

'use strict';

var memoize = require('../Function/memoize')
  , getPad  = require('../Number/get-pad')
  , pad2    = getPad(2)
  , pad3    = getPad(3)
  , isDate  = require('./is-date')

  , format = require('../String/get-format')({
		Y: function () {
			return String(this.getFullYear());
		},
		y: function () {
			return String(this.getFullYear()).slice(-2);
		},
		m: function () {
			return pad2.call(this.getMonth() + 1);
		},
		d: function () {
			return pad2.call(this.getDate());
		},
		H: function () {
			return pad2.call(this.getHours());
		},
		M: function () {
			return pad2.call(this.getMinutes());
		},
		S: function () {
			return pad2.call(this.getSeconds());
		},
		L: function () {
			return pad3.call(this.getMilliseconds());
		}
	});

module.exports = memoize(function (pattern) {
	return function () {
		if (!isDate(this)) {
			throw new TypeError("this is not a Date object");
		}
		return format.call(pattern, this);
	};
}, [String]);
