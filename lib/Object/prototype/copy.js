// Create duplicate of an object.

'use strict';

var isPlainObject = require('../plain/is-plain-object').call
  , forEach       = require('./for-each')
  , merge         = require('../plain/merge').call

var recursive = function (to, from, cloned) {
	forEach.call(from, function (value, key) {
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

module.exports = function (deep) {
	var o = merge({}, this);
	if (deep) {
		recursive(o, this, [[this], [o]]);
	}
	return o;
};
