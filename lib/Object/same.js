// Compares two objects.
// Objects are considered same when all their property names and its
// descriptors match.

'use strict';

var f      = require('../Function/functionalize')
  , oEvery = require('./every').call
  , same   = require('./plain/same').call;

module.exports = f(function (target) {
	if (Object.getOwnPropertyNames(this).length
		 === Object.getOwnPropertyNames(target).length) {
		return oEvery(this, function (desc1, name) {
			var desc2 = Object.getOwnPropertyDescriptor(target, name);
			if (desc2) {
				return same(desc1, desc2);
			}
			return false;
		});
	}
	return false;
});
