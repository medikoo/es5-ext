'use strict';

var value = require('./valid-value');

module.exports = function (stringifiable) {
	value(stringifiable);
	try {
		return String(stringifiable);
	} catch (e) {
		throw new TypeError("Passed argument cannot be stringifed");
	}
};
