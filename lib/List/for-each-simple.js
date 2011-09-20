// Simple forEach, callback receves just value argument

'use strict';

var f       = require('../Function/functionalize')
  , aritize = require('../Function/aritize').call
  , forEach = require('./for-each/call')

module.exports = f(function (fn, scope) {
	forEach(this, aritize(fn, 1), scope);
});
