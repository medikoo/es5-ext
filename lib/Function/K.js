// Returns a constant function that returns x
// K(x)(y) =def  x
//
// inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

module.exports = function (obj) {
	return function () {
		return obj;
	};
};
