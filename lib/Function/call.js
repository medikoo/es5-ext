// Return binded f.call to f
// call(f)(args…) =def  f.call(args)

'use strict';

module.exports = function (f) {
	return f.call.bind(f);
};
