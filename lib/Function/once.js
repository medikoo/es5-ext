// Run function once, ignore later call attempts

var f       = require('./functionalize')
  , toArray = require('../List/to-array').call

module.exports = f(function () {
	var fn = this, args = toArray(arguments), called;
	return function () {
		if (!called) {
			called = true;
			return fn.apply(this, args.concat(toArray(arguments)));
		}
	};
});
