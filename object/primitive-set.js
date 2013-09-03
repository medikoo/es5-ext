'use strict';

var forEach = Array.prototype.forEach, create = Object.create;

module.exports = function () {
	var set = create(null);
	forEach.call(arguments, function (name) { set[name] = true; });
	return set;
};
