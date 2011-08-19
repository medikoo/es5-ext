// Search object properties for value

'use strict';

var f    = require('../../Function/functionalize')
  , some = require('./some').call;

module.exports = f(function (needle) {
	var r;
	return some(this, function (value, name) {
		if (value === needle) {
			r = name;
			return true;
		}
		return false;
	}) ? r : null;
});
