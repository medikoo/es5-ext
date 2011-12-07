// Get all property names (whole (prototype) chain down)

'use strict';

var getOwnPropertyNames = Object.getOwnPropertyNames
  , getPrototypeOf      = Object.getPrototypeOf
  , push                = Array.prototype.push
  , uniq                = require('../../Array/prototype/uniq');

module.exports = function () {
	var o = this, keys = getOwnPropertyNames(o);
	while((o = getPrototypeOf(o))) {
		push.apply(keys, getOwnPropertyNames(o));
	}
	return uniq.call(keys);
};
