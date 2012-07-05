'use strict';

var value   = require('../Object/valid-value')
  , memoize = require('./prototype/memoize');

module.exports = memoize.call(function (name) {
	return function (o) {
		return value(o)[name];
	};
}, { length: 1, resolvers: [String] });
