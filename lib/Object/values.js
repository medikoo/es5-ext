// Return array of object property values

'use strict';

var keys    = Object.keys
  , partial = require('../Function/prototype/partial')
  , get     = require('./get');

module.exports = function (obj) {
	return keys(obj).map(partial.call(get, obj));
};
