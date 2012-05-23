// Return function that sets pregiven value to given key
//
// getSet('bar').call(obj, 'foo') =def obj['foo'] = 'bar'

'use strict';

var valid   = require('../valid-value')
  , memoize = require('../Function/prototype/memoize');

module.exports = memoize.call(function (value) {
	return function (key) {
		valid(this) && valid(key);
		this[key] = value;
	};
});
