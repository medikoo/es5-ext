// Delete property

'use strict';

var valid = require('../valid-value');

module.exports = function (obj, key) {
	valid(obj);
	delete obj[key];
};
