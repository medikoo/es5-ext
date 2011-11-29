'use strict';

var toString = Object.prototype.toString

  , id = '[object Arguments]';

module.exports = function (x) {
	return toString.call(x) === id;
};
