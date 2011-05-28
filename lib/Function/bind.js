// Return binded f.bind to f
// bind(f)(args…) =def  f.bind(args)

'use strict';

module.exports = function (f) {
	return f.bind.bind(f);
};
