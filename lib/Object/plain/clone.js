// Create duplicate of an object.

'use strict';

var f             = require('../../Function/functionalize')
  , isPlainObject = require('./is-plain-object').call
  , forEach       = require('./for-each').call
  , merge         = require('./merge').call

var recursive = function (to, from, cloned) {
	forEach(from, function (value, key) {
		var index;
		if (isPlainObject(value)) {
			if ((index = cloned[0].indexOf(value)) === -1) {
				cloned[0].push(value);
				cloned[1].push(to[key] = merge({}, value));
				recursive(to[key], value, cloned);
			} else {
				to[key] = cloned[1][index];
			}
		}
	}, from);
};

module.exports = f(function (deep) {
	var o = merge({}, this);
	if (deep) {
		recursive(o, this, [[this], [o]]);
	}
	return o;
});
