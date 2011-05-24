'use strict';

var exec = require('child_process').exec

  , run, install;

run = function () {
	require('./setup');
	var tests = require('./');
	require('test').run({
		'test es5-ext': function (assert) {
			(1, eval)('this').assert = assert;
			Object.keys(tests).forEach(function (key) {
				tests[key]();
			});
		}
	});
};

install = function (name, callback) {
	try {
		require(name);
		setTimeout(callback, 0);
	} catch (e) {
		console.log("installing '" + name + "' module ...");
		exec('npm install ' + name + '@latest', function (error, stdout, stderr) {
			if (stdout) {
				console.log(stdout.trim());
			}
			if (stderr) {
				console.error(stderr.trim());
			}
			if (error !== null) {
				console.error('exec error: ' + error);
			}
			callback(error || stderr || null);
		});
	}
};

install('test', function (err) {
	if (err) {
		return;
	}
	run();
});
