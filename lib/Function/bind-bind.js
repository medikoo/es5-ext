// Return f.bind binded to f
//
// bindBind(f)(args…) =def  f.bind(args…)

'use strict';

var bind  = Function.prototype.bind;

module.exports = function () {
	return bind.apply(bind, arguments);
};
