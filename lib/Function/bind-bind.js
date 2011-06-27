// Return f.bind binded to f
//
// bindBind(f)(args…) =def  f.bind(args…)

'use strict';

module.exports = function (f) {
	return f.bind.bind(f);
};
