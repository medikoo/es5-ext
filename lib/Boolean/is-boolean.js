// Whether object is boolean

'use strict';

var toString = require('../Object/to-string/call')

  , id         = toString(new Boolean(true));

module.exports = function (x) {
	return (typeof x === 'boolean') || ((typeof x === 'object') &&
		((x instanceof Boolean) || (toString(x) === id)));
};
