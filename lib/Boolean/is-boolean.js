// Whether object is boolean

'use strict';

var toString = require('../Object/to-string/call')

  , id         = toString(new Boolean(true))
  , type       = 'boolean'
  , objectType = 'object';

module.exports = function (x) {
	return (typeof x === type) || ((typeof x === objectType) &&
		((x instanceof Boolean) || (toString(x) === id)));
};
