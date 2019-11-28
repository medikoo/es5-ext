"use strict";

var isObject            = require("type/object/is")
  , ensureNaturalNumber = require("type/natural-number/ensure");

var generated = Object.create(null), random = Math.random, uniqTryLimit = 100;

var getChunk = function () { return random().toString(36).slice(2); };

var getString = function (length) {
	var str = getChunk();
	if (length === null) return str;
	while (str.length < length) str += getChunk();
	return str.slice(0, length);
};

module.exports = function (/* options */) {
	var options = arguments[0];
	if (!isObject(options)) options = {};
	var length = ensureNaturalNumber(options.length, { "default": 10 })
	  , isUnique = options.isUnique;

	var str = getString(length);
	if (isUnique) {
		var count = 0;
		while (generated[str]) {
			if (++count === uniqTryLimit) {
				throw new Error(
					"Cannot generate random string.\n" +
						"String.random is not designed to effectively generate many short and " +
						"unique random strings"
				);
			}
			str = getString(length);
		}
		generated[str] = true;
	}
	return str;
};
