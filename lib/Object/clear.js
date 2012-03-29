// Remove all object properties

'use strict';

var keys  = Object.keys
  , curry = require('../Function/prototype/curry')
  , unset = require('./unset');

module.exports = function (obj) {
	keys(obj).forEach(curry.call(unset, obj));
	return obj;
};
