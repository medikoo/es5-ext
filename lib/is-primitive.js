// Whether given object is primitive

'use strict';

var setTrue = require('./Object/plain/set-value').curry(true)

  , map

['boolean', 'number', 'string'].forEach(setTrue, map = {});

module.exports = function (x) {
	return map[typeof x] || (x == null);
};
