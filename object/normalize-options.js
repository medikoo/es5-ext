'use strict';

var assign = require('./assign')

  , create = Object.create, getPrototypeOf = Object.getPrototypeOf

  , process;

process = function (src, obj) {
	var proto = getPrototypeOf(src);
	return assign(proto ? process(proto, obj) : obj, src);
};

module.exports = function (options) {
	if (options == null) return {};
	return process(Object(options), create(null));
};
