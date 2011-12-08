// Return function that sets pregiven value to given key
//
// getSet('bar').call(obj, 'foo') =def obj['foo'] = 'bar'

'use strict';

var assertNotNull = require('../assert-not-null');

module.exports = require('../Function/memoize')(function (value) {
	return function (key) {
		assertNotNull(this);
		this[key] = value;
	};
});
