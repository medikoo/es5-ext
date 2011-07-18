// Clone array

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function () {
	return [].concat(this);
});
