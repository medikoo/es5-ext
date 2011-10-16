// Clone object

'use strict';

var create                   = Object.create
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  , getOwnPropertyNames      = Object.getOwnPropertyNames
  , getPrototypeOf           = Object.getPrototypeOf
  , f                        = require('../Function/functionalize');

module.exports = f(function () {
	return create(getPrototypeOf(this),
		getOwnPropertyNames(this).reduce(function (o, key) {
			o[key] = getOwnPropertyDescriptor(this, key);
			return o;
		}.bind(this), {}));
});
