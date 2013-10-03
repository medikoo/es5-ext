'use strict';

var isPlainObject = require('./is-plain-object')
  , forEach       = require('./for-each')
  , assign        = require('./assign')
  , value         = require('./valid-value')

  , recursive;

recursive = function (to, from, cloned) {
	forEach(from, function (value, key) {
		var index;
		if (isPlainObject(value)) {
			if ((index = cloned[0].indexOf(value)) === -1) {
				cloned[0].push(value);
				cloned[1].push(to[key] = assign({}, value));
				recursive(to[key], value, cloned);
			} else {
				to[key] = cloned[1][index];
			}
		}
	}, from);
};

module.exports = function (obj/*, deep*/) {
	var copy;
	if ((copy = Object(value(obj))) === obj) {
		copy = assign({}, obj);
		if (arguments[1]) {
			recursive(copy, obj, [[obj], [copy]]);
		}
	}
	return copy;
};
