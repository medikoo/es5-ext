// Run function, if function throws than catch exception and return its error
// otherwise return function result

'use strict';

var apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable');

module.exports = function () {
	assertCallable(this);
	try {
		return apply.call(this, null, arguments);
	} catch (e) {
		return e;
	}
};
