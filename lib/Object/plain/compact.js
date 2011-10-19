// Remove all properties with falsy values

'use strict';

var keys = Object.keys
  , f    = require('../../Function/functionalize');

module.exports = f(function (cb) {
	if (!cb) {
		cb = Boolean;
	}
	keys(this).forEach(function (name) {
		if (!cb(this[name], name, this)) {
			delete this[name];
		}
	}, this);
	return this;
});
