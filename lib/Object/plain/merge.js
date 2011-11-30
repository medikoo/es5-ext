// Merge properties of one object into other.
// Property keys found in both objects will be overwritten.

'use strict';

var f     = require('../../Function/functionalize')
  , merge = require('../prototype/merge-key');

module.exports = f(function (obj) {
	Object.keys(obj).forEach(merge.bind(this, obj));
	return this;
});
