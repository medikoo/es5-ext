// Simple forEach, callback receves just value argument

'use strict';

var forEach = Array.prototype.forEach
  , f       = require('../Function/functionalize')
  , aritize = require('../Function/aritize').call

module.exports = f(function (fn, scope) {
	forEach.call(this, aritize(fn, 1), scope);
});
