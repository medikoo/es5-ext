// Whether object is array-like object

'use strict';

var isFunction = require('../Function/is-function')
  , isObject   = require('./is-object');

module.exports = function (x) {
	return ((x != null) && (typeof x.length === 'number') &&

		// Just checking ((typeof x === 'object') && (typeof x !== 'function'))
		// won't work right for some (fun) cases like:
		// type of instance of NodeList in Safari is 'function' (wat?)

		((isObject(x) && !isFunction(x)) || (typeof x === "string"))) || false;
};
