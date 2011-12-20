// Delete property

'use strict';

var assertNotNull = require('../../assert-not-null')

module.exports = function (key) {
	assertNotNull(this);
	delete this[key];
};
