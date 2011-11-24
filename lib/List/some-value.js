// Same as 'some', however returns first 'truthy' value instead of just 'true'

'use strict';

var some = Array.prototype.some
  , f    = require('../Function/functionalize');

module.exports = f(function (cb, context) {
	var r;
	return some.call(this, function () {
		return (r = cb.apply(this, arguments));
	}, context) ? r : null;
});
