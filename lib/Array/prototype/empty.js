// Empty array

'use strict';

module.exports = function () {
	this.splice(0, this.length);
	return this;
};
