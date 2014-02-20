'use strict';

var keys  = require('./keys')

  , unset = function (key) { delete this[key]; };

module.exports = function (obj) {
	keys(obj).forEach(unset, obj);
	return obj;
};
