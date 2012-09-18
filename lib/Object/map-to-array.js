'use strict';

var callable = require('./valid-callable')
  , forEach  = require('./for-each')

  , call = Function.prototype.call

  , defaultCb = function (value, key) { return [key, value]; };

module.exports = function (obj, cb/*, thisArg*/) {
	var a = [], thisArg = arguments[2];
	cb = (cb == null) ? defaultCb : callable(cb);

	forEach(obj, function (value, key) {
		a.push(call.call(cb, thisArg, value, key, this));
	}, obj, arguments[3]);
	return a;
};
