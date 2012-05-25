'use strict';

var pad    = require('../../Number/prototype/pad')
  , value  = require('../../Object/valid-value')
  , format = require('../../String/prototype/format')
  , isDate = require('../is-date');

var map = {
	Y: function () {
		return String(this.getFullYear());
	},
	y: function () {
		return String(this.getFullYear()).slice(-2);
	},
	m: function () {
		return pad.call(this.getMonth() + 1, 2);
	},
	d: function () {
		return pad.call(this.getDate(), 2);
	},
	H: function () {
		return pad.call(this.getHours(), 2);
	},
	M: function () {
		return pad.call(this.getMinutes(), 2);
	},
	S: function () {
		return pad.call(this.getSeconds(), 2);
	},
	L: function () {
		return pad.call(this.getMilliseconds(), 3);
	}
};

module.exports = function (pattern) {
	if (!isDate(this)) {
		throw new TypeError("this is not a Date object");
	}
	pattern = String(value(pattern));
	return format.call(pattern, map, this);
};
