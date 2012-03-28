// Remove all object properties

'use strict';

var keys  = Object.keys
  , unset = require('./prototype/unset');

module.exports = function (obj) {
	keys(obj).forEach(unset, obj);
	return obj;
};
