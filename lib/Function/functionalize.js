// Bind function's bind, call and apply methods to itself

'use strict';

var bindBind  = require('./bind-bind')
  , bindCall  = require('./bind-call')
  , bindApply = require('./bind-apply');

module.exports = function (f) {
	f.bind = bindBind(f); f.call = bindCall(f); f.apply = bindApply(f);
	return f;
};
