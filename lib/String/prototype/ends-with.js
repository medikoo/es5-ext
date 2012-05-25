'use strict';

module.exports = function (searchString) {
	var self, index;
	self = String(this);
	index = self.lastIndexOf(searchString, arguments[1]);
	return (index !== -1) && (index === (self.length - searchString.length));
};
