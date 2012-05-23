'use strict';

var valid   = require('../../valid-value')
  , getPad  = require('../../Number/get-pad')
  , pad2    = getPad(2)
  , pad3    = getPad(3)
  , isDate  = require('../is-date')

  , format = require('../../String/get-format')({
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

module.exports = function (pattern) {
	if (!isDate(this)) {
		throw new TypeError("this is not a Date object");
	}
	pattern = valid(pattern) && String(pattern);
	return format.call(pattern, this);
};
