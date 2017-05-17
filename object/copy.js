'use strict';

var aFrom  = require('../array/from')
  , assign = require('./assign')
  , value  = require('./valid-value');

module.exports = function (obj/*, propertyNames*/) {
	var copy = Object(value(obj)), propertyNames = arguments[1];
	if (copy !== obj && !propertyNames) return copy;
	var result = {};
	if (propertyNames) {
		aFrom(propertyNames, function (propertyName) {
			if (propertyName in obj) result[propertyName] = obj[propertyName];
		});
	} else {
		assign(result, obj);
	}
	return result;
};
