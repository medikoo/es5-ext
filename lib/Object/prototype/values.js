// Return array of object property values

'use strict';

var keys = Object.keys
  , get  = require('./get');

module.exports = function () {
	return keys(this).map(get, this);
};
