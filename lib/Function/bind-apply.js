// Return f.apply binded to f
// bindApply(f)(args) =def  f.apply(args)

'use strict';

module.exports = function (f) {
	return f.apply.bind(f);
};
