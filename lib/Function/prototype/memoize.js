'use strict';

var isArray  = Array.isArray
  , map      = Array.prototype.map
  , slice    = Array.prototype.slice
  , apply    = Function.prototype.apply
  , toArray  = require('../../Array/from')
  , indexOf  = require('../../Array/prototype/e-index-of')
  , callable = require('../../Object/valid-callable')

  , resolve;

resolve = function (args) {
	return this.map(function (r, i) {
		return r ? r(args[i]) : args[i];
	}).concat(slice.call(args, this.length));
};

// Implementation details:
//
// Results are saved internally within array matrix:
// cache[0] -> Result of calling function with no arguments
// cache[1] -> Matrix that keeps results for one argument function calls
// cache[1][0] -> Array of different arguments with which
//                function have been called
// cache[1][1] -> Array of results that matches cache[1][0] arguments array
// cache[2] -> Matrix that keeps results for two argument function calls
// cache[2][0] -> Array of different first (of two) arguments with which
//                function have been called
// cache[2][1] -> Matrixes that keeps results for two arguments function calls
//                Each matrix matches first argument found in cache[2][0]
// cache[2][1][x][0] -> Array of different second arguments with which
//                      function have been called.
// cache[2][1][x][1] -> Array of results that matches cache[2][1][x][0]
//                      arguments array
// ...and so on

module.exports = function (length, resolvers) {
	var fn, cache, resolver, find, aset, rset, index, found, mfn;
	fn = callable(this);

	cache = [];
	if (isArray(length)) {
		resolvers = length;
		length = fn.length;
	} else if (length == null) {
		length = fn.length;
	} else if (length !== false) {
		length = length >>> 0;
	}

	if (resolvers != null) {
		resolvers = toArray(resolvers);
		resolvers.forEach(function (r) {
			(r == null) || callable(r);
		});
		resolver = resolve.bind(resolvers);
	}

	find =  function (args) {
		var limit, i, arg;

		i = 0;
		aset = found = false;
		index = limit = (length === false) ? args.length : length;
		rset = cache;

		if (limit === 0) {
			found = rset.hasOwnProperty(0);
		} else {
			while (i !== limit) {
				if (!rset[index]) {
					rset = (rset[index] = [[args[i]], []]);
					index = 0;
				} else if ((index =
						indexOf.call((rset = rset[index])[0], args[i])) === -1) {
					index = rset[0].push(args[i]) - 1;
					found = false;
				} else {
					found = rset[1].hasOwnProperty(index);
				}
				aset = rset[0];
				rset = rset[1];
				++i;
			}
		}
	};

	mfn = function () {
		var args, result;
		args = resolver ? resolver(arguments) : arguments;
		find(args);
		if (found) {
			result = rset[index];
		} else {
			mfn.args = arguments;
			result = (rset[index] = apply.call(fn, this, args));
			delete mfn.args;
		}
		return result
	};

	mfn.clearCache = function () {
		find(resolver ? resolver(arguments) : arguments);
		if (found) {
			if (aset) {
				aset.splice(index, 1);
				rset.splice(index, 1);
			} else {
				delete rset[index];
			}
		}
	};

	mfn.clearAllCache = function () {
		cache = [];
	};

	return mfn;
};
