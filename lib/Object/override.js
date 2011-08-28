// As extend, but doesn't extend object but operates exactly on it.
// see ../extend.js

'use strict';

var defineProperties = Object.defineProperties
  , getPrototypeOf   = Object.getPrototypeOf
  , f                = require('../Function/functionalize')
  , copy             = require('./plain/clone').call
  , oMap             = require('./plain/map').call
  , currySuper       = require('./_curry_super')

  , fn;

fn = function (proto, desc, name) {
	desc = copy(desc);
	desc.value = currySuper(this[name], desc.value, proto);
	return desc;
};

module.exports = f(function (descriptors) {
	return defineProperties(this,
		oMap(descriptors || {}, fn.bind(this, getPrototypeOf(this))));
});
