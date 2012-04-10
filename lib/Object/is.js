// To be ES6 standard
// Whether two values are equal, takes into account NaN and -0/+0 cases:
//
// Implementation credits go to:
// http://wiki.ecmascript.org/doku.php?id=harmony:egal

'use strict';

module.exports = function (x, y) {
	return (x === y) ?
		((x !== 0) || ((1 / x) === (1 / y))) :
		((x !== x) && (y !== y));
};
