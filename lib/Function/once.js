// Run function once, ignore later call attempts

var f       = require('./functionalize')
  , concat  = require('../List/concat').call
  , toArray = require('../List/to-array').call

module.exports = f(function () {
	var fn = this, args = arguments, called;
	return function () {
		if (!called) {
			called = true;
			return fn.apply(this, concat(args, toArray(arguments)));
		}
	};
});
