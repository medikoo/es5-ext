// Return f.call binded to f
// bindCall(f)(args…) =def  f.call(args)

'use strict';

module.exports = function (f) {
	return f.call.bind(f);
};
