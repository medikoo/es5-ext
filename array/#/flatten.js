'use strict';

var isArray = Array.isArray, forEach = Array.prototype.forEach;

module.exports = function () {
	var r = [];
	forEach.call(this, function self(x) {
		if (isArray(x)) x.forEach(self);
		else r.push(x);
	});
	return r;
};
