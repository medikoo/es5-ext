// As extend, but instead extending protype chain operates exactly on object.
// see ../extend.js

'use strict';

var defineProperties = Object.defineProperties
  , getPrototypeOf   = Object.getPrototypeOf
  , map              = require('./map')
  , currySuper       = require('./_curry_super')
  , copy             = require('./copy')

  , prepare;

prepare = function (proto, property, name) {
	property = copy(property);
	property.value = currySuper(this[name], property.value, proto);
	return property;
};

module.exports = function (obj, properties) {
	return defineProperties(obj,
		map(properties || {}, prepare.bind(obj, getPrototypeOf(obj))));
};
