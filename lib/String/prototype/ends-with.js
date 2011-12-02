// Whether strings ends with given string

'use strict';

module.exports = function (needle) {
	var self, index;
	self = String(this);
	index = self.lastIndexOf(needle);
	return (index !== -1) && (index === (self.length - needle.length));
};
