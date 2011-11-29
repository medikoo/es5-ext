// As extend, but doesn't extend object but operates exactly on it.
// see ../extend.js

'use strict';

var defineProperties = Object.defineProperties
  , getPrototypeOf   = Object.getPrototypeOf
  , copy             = require('../plain/clone').call
  , map              = require('../plain/map').call
  , currySuper       = require('./_curry_super')

  , prepare;

prepare = function (proto, desc, name) {
	desc = copy(desc);
	desc.value = currySuper(this[name], desc.value, proto);
	return desc;
};

module.exports = function (descriptors) {
	return defineProperties(this,
		map(descriptors || {}, prepare.bind(this, getPrototypeOf(this))));
};
