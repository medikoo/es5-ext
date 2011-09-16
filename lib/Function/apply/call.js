// Return f.apply which can be directly called on f
//
// applyCall(f, args) =def f.apply(args)

'use strict';

var apply = Function.prototype.apply
  , call  = Function.prototype.call;

module.exports = function () {
	return call.apply(apply, arguments);
};
