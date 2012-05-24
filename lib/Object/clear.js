'use strict';

var keys    = Object.keys
  , partial = require('../Function/prototype/partial')

  , unset = function (key) { delete this[key]; };

module.exports = function (obj) {
	keys(obj).forEach(unset, obj);
	return obj;
};
