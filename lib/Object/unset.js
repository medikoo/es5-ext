// Delete property

'use strict';

var assertNotNull = require('../assert-not-null');

module.exports = function (obj, key) {
	assertNotNull(obj);
	delete obj[key];
};
