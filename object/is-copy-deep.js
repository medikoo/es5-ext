'use strict';

var eq            = require('./eq')
  , isPlainObject = require('./is-plain-object')
  , getIsCopy     = require('./_is-copy');

module.exports = function (a, b) {
	var c1 = [a], c2 = [[b]], fn;
	fn = getIsCopy(function (a, b) {
		var i;
		if (eq(a, b)) return true;
		if (!isPlainObject(a) || !isPlainObject(b)) return false;
		i = c1.indexOf(a);
		if (i !== -1) {
			if (c2[i].indexOf(b) !== -1) return true;
		} else {
			i = c1.push(a) - 1;
			c2[i] = [];
		}
		c2[i].push(b);
		return fn(a, b);
	});
	return fn(a, b);
};
