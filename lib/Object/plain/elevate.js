// Merge object properties of given object into one object
//
// elevate.call({ a: { b: 1, c: 1 }, d: { e: 1, f: 1 } })
//                 =def { b: 1, c: 1, e: 1, f: 1 }

'use strict';

var f        = require('../../Function/functionalize')
  , sequence = require('../../Function/sequence').call
  , pluck    = require('./pluck').bind
  , merge    = require('./merge').bind;

module.exports = f(function (result) {
	result = result || {};
	Object.keys(this).forEach(sequence(pluck(this), merge(result)));
	return result;
});
