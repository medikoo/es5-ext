// Bind function's bind, call and apply methods to itself

'use strict';

var bindBind  = require('./bind/bind')
  , callBind  = require('./call/bind')
  , applyBind = require('./apply/bind')
  , toArray = function (args) {
		return (args.length === 1) ? [args[0]] : Array.apply(null, args);
	}
  , curry = function () {
		var fn   = this
		  , args = arguments;
		return function () {
			return fn.apply(this, toArray(args).concat(toArray(arguments)));
		};
	};

module.exports = function (f) {
	f.bind = bindBind(f); f.call = callBind(f); f.apply = applyBind(f);
	f.curry = curry.bind(f);
	return f;
};
