// Return array of object property values

'use strict';

var keys = Object.keys
  , curry = require('../../Function/prototype/curry')
  , get  = require('../get');

module.exports = function () {
	return keys(this).map(curry.call(get, this));
};
