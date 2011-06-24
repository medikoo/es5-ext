// Returns a constant function that returns x
// k(x)(y) =def  x
//
// Inspired by: http://osteele.com/sources/javascript/functional/

'use strict';

var bindBind = require('./bind-bind');

module.exports = bindBind(function () {
		return this;
});
