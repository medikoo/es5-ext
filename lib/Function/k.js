// Returns a constant function that returns x
// k(x)(y) =def  x
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

module.exports = function (x) {
	return function () {
		return x;
	};
};
