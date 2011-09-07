// Whether value is not primitive

'use strict';

module.exports = function (x) {
	return x === Object(x);
};
