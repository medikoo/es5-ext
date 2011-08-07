// Clone function
// It basically wraps function with other and copies all its properties

'use strict';

var f     = require('./functionalize')
  , merge = require('../Object/merge').call;

module.exports = f(function () {
	var fn = this;
	var clone = function () {
		return fn.apply(this, arguments);
	};
	return merge(clone, this);
});
