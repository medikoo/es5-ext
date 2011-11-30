// As extend, but doesn't extend object but operates exactly on it.
// see ../extend.js

'use strict';

var defineProperties = Object.defineProperties
  , getPrototypeOf   = Object.getPrototypeOf
  , map              = require('./map')
  , currySuper       = require('./_curry_super')
  , copy             = require('./copy')

  , prepare;

prepare = function (proto, desc, name) {
	desc = copy.call(desc);
	desc.value = currySuper(this[name], desc.value, proto);
	return desc;
};

module.exports = function (descriptors) {
	return defineProperties(this,
		map.call(descriptors || {}, prepare.bind(this, getPrototypeOf(this))));
};
