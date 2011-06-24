// Extend object.
// Function properties found in both objects will be extended such as child
// method will receive descendand method as first argument.
// This configuraton allows super calls. More details at ../Function/inherit

'use strict';

var bindBind   = require('../Function/bind-bind')
  , f          = require('../Function/functionalize')
  , isFunction = require('../Function/is-function')
  , inherit    = require('../Function/inherit')

  , fn;

fn = bindBind(function (b, k) {
	this[k] = isFunction(this[k]) ? inherit(b[k], this[k]) : b[k];
});

module.exports = f(function (b) {
	Object.keys(b).forEach(fn(this, b));
	return this;
});
