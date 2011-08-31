// Whether given value is type of number and isFinite

'use strict';

module.exports = function (x) {
	return (typeof x === 'number') && isFinite(x);
};
