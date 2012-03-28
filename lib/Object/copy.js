// Create duplicate of an object.

'use strict';

var assertNotNull = require('../assert-not-null')
  , isPlainObject = require('./is-plain-object')
  , forEach       = require('./prototype/for-each')
  , merge         = require('./prototype/merge')

  , recursive;

recursive = function (to, from, cloned) {
	forEach.call(from, function (value, key) {
		var index;
		if (isPlainObject(value)) {
			if ((index = cloned[0].indexOf(value)) === -1) {
				cloned[0].push(value);
				cloned[1].push(to[key] = merge.call({}, value));
				recursive(to[key], value, cloned);
			} else {
				to[key] = cloned[1][index];
			}
		}
	}, from);
};

module.exports = function (obj, deep) {
	var o;
	assertNotNull(obj);
	o = merge.call({}, obj);
	if (deep) {
		recursive(o, obj, [[obj], [o]]);
	}
	return o;
};
