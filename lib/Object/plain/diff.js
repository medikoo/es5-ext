// Returns differences between two plain objects
// Returned object is three arrays wrapped in array
// Each array is set of found property names that:
// 0 - were not present in other object
// 1 - have different values
// 2 - were not present in scope object

'use strict';

var keys         = Object.keys
	, f            = require('../../Function/functionalize')
  , diff         = require('../../List/diff').call
  , intersection = require('../../List/intersection').call
  , isObject     = require('../is-object')
  , forEach      = require('./for-each').call
  , link         = require('./link').bind;


module.exports = f(function (target) {
	var k1 = keys(this), k2 = keys(target);
	return [diff(k1, k2), intersection(k1, k2).filter(function (key) {
		return (isObject(this[key]) && isObject(target[key])) ?
			(this[key].valueOf() !== target[key].valueOf()) :
			(this[key] !== target[key]);
	}, this), diff(k2, k1)];
});
