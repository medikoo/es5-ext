// Same as Object.create but enables super calls
// If function property is found in both objects, and child function arguments
// list starts with '_super' argument, then it will be extended such as child
// method will receive descendand.call method as first argument.

'use strict';

var create     = Object.create
  , map        = require('./map')
  , currySuper = require('./_curry_super')
  , copy       = require('./copy')

  , prepare;

prepare = function (property, name) {
	property = copy.call(property);
	property.value = currySuper(this[name], property.value, this);
	return property;
};

module.exports = function (properties) {
	return create(this, map.call(properties || {}, prepare, this));
};
