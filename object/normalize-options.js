'use strict';

var assign = require('./assign')
  , value  = require('./valid-value')

  , create = Object.create, getPrototypeOf = Object.getPrototypeOf

  , process;

process = function (src, obj) {
	var proto = getPrototypeOf(src);
	return assign(proto ? process(proto, obj) : obj, src);
};

module.exports = function (src) { return process(value(src), create(null)); };
