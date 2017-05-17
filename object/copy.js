"use strict";

var aFrom                = require("../array/from")
  , assign               = require("./assign")
  , value                = require("./valid-value")
  , propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function(obj /*, propertyNames*/) {
	var copy = Object(value(obj)), propertyNames = arguments[1];
	if (copy !== obj && !propertyNames) return copy;
	var result = {};
	if (propertyNames) {
		aFrom(propertyNames, function(propertyName) {
			if (propertyIsEnumerable.call(obj, propertyName))
				result[propertyName] = obj[propertyName];
		});
	} else {
		assign(result, obj);
	}
	return result;
};
