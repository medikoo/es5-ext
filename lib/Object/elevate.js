// Merge object properties of given object into one object
// elevate({ a: { b: 1, c: 1 }, d: { e: 1, f: 1 } })
//                 =def { b: 1, c: 1, e: 1, f: 1 }

'use strict';

var curry = require('../Function/curry')
  , sequence = require('../Function/sequence')
  , get = require('./get')
  , merge = require('./merge');

module.exports = function (obj, result) {
	result = result || {};
	Object.keys(obj).forEach(sequence(get(obj), curry(merge, result)));
	return result;
};
