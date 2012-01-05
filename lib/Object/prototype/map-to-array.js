// Analogous to Array.prototype.map
//
// Creates an array of results of calling
// a provided function on every key-value pair in this object.

'use strict';

var assertCallable = require('../assert-callable')
  , forEach        = require('./for-each')

  , defaultCb;

defaultCb = function (value, key) {
	return [key, value];
};

module.exports = function (cb, thisArg, compareFn, byKeys) {
	var a = [];
	if (cb != null) {
		assertCallable(cb);
	} else {
		cb = defaultCb;
	}
	forEach.call(this, function (value, key) {
		a.push(cb.call(thisArg, value, key, this));
	}, this, compareFn, byKeys);
	return a;
};
