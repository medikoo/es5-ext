// Invoke function on pregiven object and arguments
//
// invoke(obj, args)(f) =def f.call(obj, args);

'use strict';

var f = require('../Function/functionalize')

  , fn = function (args, f) {
		return f.apply(this, args);
	};

module.exports = f(function () {
	return fn.bind(this, arguments);
});
