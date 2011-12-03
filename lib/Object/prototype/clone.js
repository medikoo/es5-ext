// Clone object

'use strict';

var create                   = Object.create
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  , getOwnPropertyNames      = Object.getOwnPropertyNames
  , getPrototypeOf           = Object.getPrototypeOf

module.exports = function () {
	var props = {};
	getOwnPropertyNames(this).forEach(function (name) {
		props[name] = getOwnPropertyDescriptor(this, name);
	}, this);
	return create(getPrototypeOf(this), props);
};
