// Same as 'some', however returns first 'truthy' value returned by
// iterator function instead of just 'true'

'use strict';

var some           = Array.prototype.some
  , apply          = Function.prototype.apply
  , assertCallable = require('../../Object/assert-callable');

module.exports = function (cb, thisArg) {
	var r;
	assertCallable(cb);
	return some.call(this, function () {
		return (r = apply.call(cb, this, arguments));
	}, thisArg) ? r : null;
};
