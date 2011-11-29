// Get all property names (whole (prototype) chain down)

'use strict';

var push = Array.prototype.push
  , uniq = require('../../Array/prototype/uniq');

module.exports = function () {
	var o = this, keys = Object.getOwnPropertyNames(o);
	while((o = Object.getPrototypeOf(o))) {
		push.apply(keys, Object.getOwnPropertyNames(o));
	}
	return uniq.call(keys);
};
