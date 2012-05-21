// Return function that sets pregiven value to given key
//
// getSet('bar').call(obj, 'foo') =def obj['foo'] = 'bar'

'use strict';

var valid   = require('../valid-value')
  , memoize = require('../Function/memoize');

module.exports = memoize(function (value) {
	return function (key) {
		valid(this) && valid(key);
		this[key] = value;
	};
});
