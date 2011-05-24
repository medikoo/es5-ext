'use strict';

['elevate', 'get', 'isObject', 'isPlainObject', 'link', 'merge', 'set',
	'setTrue', 'setValue', 'values'].forEach(function (mod) {
	mod = require('./' + mod);
	Object.keys(mod).forEach(function (key) {
		if (exports[key]) {
			assert.fail("Test name '" + key + "' already taken");
			return;
		}
		exports[key] = mod[key];
	});
});

if (module == require.main) {
	require('test').run(exports);
}
