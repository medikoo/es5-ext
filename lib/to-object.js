// Converts argument to a value of type Object
// http://es5.github.com/#x9.9

'use strict';

var valid = require('./valid-value');

module.exports = function (value) {
	return valid(value) && Object(value); //jslint: skip
};
