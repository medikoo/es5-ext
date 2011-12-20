// As extend, but doesn't extend object but operates exactly on it.
// see ../extend.js

'use strict';

var defineProperties = Object.defineProperties
  , getPrototypeOf   = Object.getPrototypeOf
  , map              = require('./map')
  , currySuper       = require('./_curry_super')
  , copy             = require('./copy')

  , prepare;

prepare = function (proto, property, name) {
	property = copy.call(property);
	property.value = currySuper(this[name], property.value, proto);
	return property;
};

module.exports = function (properties) {
	return defineProperties(this,
		map.call(properties || {}, prepare.bind(this, getPrototypeOf(this))));
};
