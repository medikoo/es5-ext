'use strict';

var valid = require('../../valid-value');

module.exports = function () {
	var self = valid(this) && String(this), l = self.length;
	return l ? self[l - 1] : null;
};
