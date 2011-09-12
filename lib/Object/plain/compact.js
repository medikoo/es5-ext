// Remove all properties with falsy values

'use strict';

var keys = Object.keys
  , f    = require('../../Function/functionalize');

module.exports = f(function () {
	keys(this).forEach(function (name) {
		if (!this[name]) {
			delete this[name];
		}
	}, this);
	return this;
});
