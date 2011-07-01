// Apply array items to function

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (fn, scope) {
	return fn.apply(scope, this);
});
