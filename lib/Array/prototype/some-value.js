// Same as 'some', however returns first 'truthy' value returned by
// iterator function instead of just 'true'

'use strict';

var some = Array.prototype.some;

module.exports = function (cb, context) {
	var r;
	return some.call(this, function () {
		return (r = cb.apply(this, arguments));
	}, context) ? r : null;
};
