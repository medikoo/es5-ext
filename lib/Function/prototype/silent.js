// Run function, if function throws than catch exception and return its error
// otherwise return function result

'use strict';

var apply      = Function.prototype.apply
  , isCallable = require('../../Object/is-callable');

module.exports = function () {
	if (!isCallable(this)) {
		throw new TypeError(this + " is not a function");
	}
	try {
		return apply.call(this, null, arguments);
	} catch (e) {
		return e;
	}
};
