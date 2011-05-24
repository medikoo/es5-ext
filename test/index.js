'use strict';

['global', 'reserved', 'Array', 'Function', 'Object'].forEach(function (mod) {
	mod = require('./' + mod);
	Object.keys(mod).forEach(function (key) {
		if (exports[key]) {
			assert.fail("Test name '" + key + "' already taken");
			return;
		}
		exports[key] = mod[key];
	});
});
