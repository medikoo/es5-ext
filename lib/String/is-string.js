// Whether object is string

'use strict';

var toString = require('../Object/to-string/call')

  , id = toString('');

module.exports = function (x) {
	return (typeof x === 'string') || (x && (typeof x == 'object') &&
		((x instanceof String) || (toString(x) === id))) || false;
};
