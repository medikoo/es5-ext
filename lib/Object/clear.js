// Remove all object properties

'use strict';

var keys  = Object.keys
  , partial = require('../Function/prototype/partial')
  , unset = require('./unset');

module.exports = function (obj) {
	keys(obj).forEach(partial.call(unset, obj));
	return obj;
};
