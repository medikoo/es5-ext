// Clone function
// It basically wraps function with other and copies all its properties

'use strict';

var merge = require('../Object/merge').call;

module.exports = function (fn) {
	var clone = function () {
		return fn.apply(this, arguments);
	};
	return merge(clone, fn);
};
