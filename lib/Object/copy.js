// Create duplicate of an object.
// Empty object is returned when called without argument.

'use strict';

var isPlainObject = require('./is-plain-object')
  , forEach       = require('./for-each')
  , merge         = require('./merge')

  , recursive;

recursive = function (to, from, cloned) {
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

module.exports = function (obj, deep) {
	var o;
	if ((o = Object(obj)) === obj) {
		o = merge({}, obj);
		if (deep) {
			recursive(o, obj, [[obj], [o]]);
		}
	}
	return o;
};
