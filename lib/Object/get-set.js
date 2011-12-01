// Return function that sets pregiven value to given key
//
// getSet('bar').call(obj, 'foo') =def obj['foo'] = 'bar'

'use strict';

module.exports = require('../Function/memoize')(function (value) {
	return function (key) {
		this[key] = value;
	};
});
