// Clone object

'use strict';

var create                   = Object.create
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  , getOwnPropertyNames      = Object.getOwnPropertyNames
  , getPrototypeOf           = Object.getPrototypeOf

module.exports = function () {
	return create(getPrototypeOf(this),
		getOwnPropertyNames(this).reduce(function (o, key) {
			o[key] = getOwnPropertyDescriptor(this, key);
			return o;
		}.bind(this), {}));
};
