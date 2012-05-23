// Compare by given property

'use strict';

var valid   = require('../valid-value')
  , memoize = require('../Function/prototype/memoize')
  , compare = require('./compare');

module.exports = memoize.call(function (name) {
	return function (other) {
		valid(this) && valid(other);
		return compare(this[name], other[name]);
	};
}, [function (name) {
	return valid(name) && String(name);
}]);
