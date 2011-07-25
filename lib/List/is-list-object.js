// Whether object is array-like object but not primitive

'use strict';

module.exports = function (x) {
	return x && (typeof x.length === 'number') && (typeof x === "object");
};
