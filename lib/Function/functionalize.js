// Bind function's bind, call and apply methods to itself

'use strict';

var bindBind  = require('./bind-bind')
  , bindCall  = require('./bind-call')
  , applyBind = require('./apply-bind');

module.exports = function (f) {
	f.bind = bindBind(f); f.call = bindCall(f); f.apply = applyBind(f);
	return f;
};
