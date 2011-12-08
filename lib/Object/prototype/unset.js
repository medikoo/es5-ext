// Delete property

'use strict';

var assertNotNull = require('../../assert-not-null')

module.exports = function (name) {
	assertNotNull(this);
	delete this[name];
};
