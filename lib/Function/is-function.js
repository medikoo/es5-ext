// Is f a function ?

'use strict';

var toString = Object.prototype.toString

  , id = toString.call(function () {});

module.exports = function (f) {
	return (typeof f === "function") && (toString.call(f) === id);
};
