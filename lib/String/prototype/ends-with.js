// Whether strings ends with given string

'use strict';

module.exports = function (searchString) {
	var self, index;
	self = String(this);
	index = self.lastIndexOf(searchString);
	return (index !== -1) && (index === (self.length - searchString.length));
};
