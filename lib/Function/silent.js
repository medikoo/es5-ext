// Run function, if function throws than catch exception and return its error
// otherwise return function result

'use strict';

var f = require('./functionalize');

module.exports = f(function () {
	try {
		return this.apply(null, arguments);
	} catch (e) {
		return e;
	}
});
