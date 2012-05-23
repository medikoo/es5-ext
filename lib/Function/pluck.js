'use strict';

var valid   = require('../valid-value')
  , memoize = require('./prototype/memoize');

module.exports = memoize.call(function (name) {
	return function (o) {
		return o[name];
	};
}, 1, [function (name) {
	return valid(name) && String(name);
}]);
