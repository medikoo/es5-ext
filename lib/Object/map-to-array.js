// Analogous to Array.prototype.map
//
// Creates an array of results of calling
// a provided function on every key-value pair in this object.

'use strict';

var callable = require('./valid-callable')
  , forEach  = require('./for-each')

  , defaultCb;

defaultCb = function (value, key) {
	return [key, value];
};

module.exports = function (obj, cb, thisArg, compareFn) {
	var a = [];
	cb = (cb == null) ? defaultCb : callable(cb);

	forEach(obj, function (value, key) {
		a.push(cb.call(thisArg, value, key, this));
	}, obj, compareFn);
	return a;
};
