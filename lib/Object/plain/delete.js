// Delete property of object

'use strict';

var f = require('../../Function/functionalize');

module.exports = f(function (name) {
	delete this[name];
});
