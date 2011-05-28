'use strict';

['bindMethods', 'elevate', 'extend', 'isObject', 'isPlainObject', 'link',
	'merge', 'pluck', 'set', 'setTrue', 'setValue', 'values']
	.forEach(function (mod) {
	mod = require('./' + mod);
	Object.keys(mod).forEach(function (key) {
		if (exports[key]) {
			assert.fail("Test name '" + key + "' already taken");
			return;
		}
		exports[key] = mod[key];
	});
});
