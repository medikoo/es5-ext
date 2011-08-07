// Return hash of descriptors for hash of values.
// Shortcut for defining non enumerable, non writeable & non configurable
// properties

'use strict';

var f        = require('../Function/functionalize')
  , describe = require('./to-descriptor').call
  , omap     = require('./plain/map').call;

module.exports = f(function () {
	return omap(this, describe);
});
