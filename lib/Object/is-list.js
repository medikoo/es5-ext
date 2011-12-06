// Whether object is array-like object

'use strict';

module.exports = function (x) {
	return ((x != null) && (typeof x.length === 'number') &&
		((typeof x === "object") || (typeof x === "string"))) || false;
};
