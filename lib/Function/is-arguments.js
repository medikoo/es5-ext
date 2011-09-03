'use strict';

var toString = require('../Object/to-string/call')

  , id = '[object Arguments]';

module.exports = function (x) {
	return toString(x) === id;
};
