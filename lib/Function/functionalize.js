// Bind function's bind, call and apply methods to itself

'use strict';

var apply     = Function.prototype.apply
  , bind      = Function.prototype.bind
  , call      = Function.prototype.call
  , toArray, curry, applyArgs, f, count = 0;

toArray = function (args) {
	return (args.length === 1) ? [args[0]] : Array.apply(null, args);
};

curry = function () {
	var fn   = this
	  , args = arguments;
	return f(function () {
		return fn.apply(this, toArray(args).concat(toArray(arguments)));
	});
};

applyArgs = function (args) {
	return this.apply(null, args);
};

f = module.exports = function (fn) {
	fn.bind = bind.bind(fn); fn.call = call.bind(fn); fn.apply = apply.bind(fn);
	fn.curry = curry.bind(fn); fn.call.applyArgs = applyArgs.bind(fn.call);
	return fn;
};
