// Find first element for which given function returns true

'use strict';

var some = Array.prototype.some

module.exports = function (query, context) {
	var r;
	return some.call(this, function (value) {
		if (query.apply(this, arguments)) {
			r = value;
			return true;
		}
		return false;
	}, context) ? r : null;
};
