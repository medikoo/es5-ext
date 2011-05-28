'use strict';

var tests;

require('./setup');

tests = require('./');

require('test').run({
	'test es5-ext': function (assert) {
		var indirectEval = eval;
		indirectEval('this').assert = assert;
		Object.keys(tests).forEach(function (key) {
			tests[key]();
		});
	}
});
