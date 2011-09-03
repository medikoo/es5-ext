// Return f.apply binded to f
//
// applyBind(f)(args) =def f.apply(args)

'use strict';

var apply = Function.prototype.apply
  , bind  = Function.prototype.bind;

module.exports = function () {
	return bind.apply(apply, arguments);
};
