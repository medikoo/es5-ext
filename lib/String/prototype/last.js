// Return last character

'use strict';

module.exports = function () {
	var self = String(this), l = self.length;
	return l ? self[l - 1] : null;
};
