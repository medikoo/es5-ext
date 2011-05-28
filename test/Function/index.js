'use strict';

['bind', 'call', 'curry', 'dscope', 'flip', 'functionalize', 'inherit',
	'invoke', 'isFunction', 'k', 's', 'sequence'].forEach(function (name) {
	var mod = require('./' + name);
	Object.keys(mod).forEach(function (key) {
		if (exports[key]) {
			assert.fail("Test name '" + key + "' used in '" + name +
				"' already taken");
			return;
		}
		exports[key] = mod[key];
	});
});
