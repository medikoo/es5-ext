// Returns a constant function that returns x
// k(x)(y) =def  x
//
// inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var bind = require('./bind');

module.exports = bind(function () {
		return this;
});
