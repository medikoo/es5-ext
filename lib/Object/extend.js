// Extend object. Function properties found in both objects will be extended
// such as child method will receive descendand method as first argument.
// This configuraton allows super calls. More details under ../Function/inherit

'use strict';

var bind       = require('../Function/bind')
  , f          = require('../Function/functionalize')
  , isFunction = require('../Function/isFunction')
  , inherit    = require('../Function/inherit')

  , fn;

fn = bind(function (b, k) {
	this[k] = isFunction(this[k]) ? inherit(b[k], this[k]) : b[k];
});

module.exports = f(function (b) {
	Object.keys(b).forEach(fn(this, b));
	return this;
});
