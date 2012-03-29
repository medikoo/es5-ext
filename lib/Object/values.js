// Return array of object property values

'use strict';

var keys = Object.keys
  , curry = require('../Function/prototype/curry')
  , get  = require('./get');

module.exports = function (obj) {
	return keys(obj).map(curry.call(get, obj));
};
