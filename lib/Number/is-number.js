// Whether given value is number but not NaN

'use strict';

var toString = require('../Object/to-string/call')

  , id = toString(1);

module.exports = function (x) {
	return (((typeof x === 'number') || (x && (typeof x == 'object') &&
		((x instanceof Number) || (toString(x) === id)))) && !isNaN(x)) || false;
};
