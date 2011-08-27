// As extend, but doesn't extend object but operates exactly on it.
// see ../extend.js

'use strict';

var defineProperties = Object.defineProperties
  , f                = require('../Function/functionalize')
  , copy             = require('./plain/clone').call
  , oMap             = require('./plain/map').call
  , currySuper       = require('./_curry_super')

  , fn;

fn = function (desc, name) {
	desc = copy(desc);
	desc.value = currySuper(this[name], desc.value);
	return desc;
};

module.exports = f(function (descriptors) {
	return defineProperties(this, oMap(descriptors || {}, fn, this));
});
