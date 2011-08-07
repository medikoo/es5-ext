// Bind function's bind, call and apply methods to itself

'use strict';

var bindBind  = require('./bind-bind')
  , callBind  = require('./call-bind')
  , applyBind = require('./apply-bind');

module.exports = function (f) {
	f.bind = bindBind(f); f.call = callBind(f); f.apply = applyBind(f);
	return f;
};
