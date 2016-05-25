'use strict';

var isArray = Array.isArray, forEach = Array.prototype.forEach
  , push = Array.prototype.push;

module.exports = function flatten() {
	var r = [];
	forEach.call(this, function (x) {
		if (isArray(x)) {
			x = flatten.call(x);
			if (x.length > 50000) {
				// Prevent going beyond maximum call stack size eventually
				while (x.length) {
					push.apply(r, x.slice(0, 5000));
					x = x.slice(50000);
				}
			} else {
				push.apply(r, x);
			}
		} else {
			r.push(x);
		}
	});
	return r;
};
