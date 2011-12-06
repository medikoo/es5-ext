// Return copy of list

'use strict';

var slice = Array.prototype.slice

module.exports = function () {
	return slice.call(this);
};
