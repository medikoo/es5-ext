// Internal method used by 'extend' and 'override' methods

'use strict';

var callBind   = require('../Function/call-bind')
  , curry      = require('../Function/curry').call
  , isFunction = require('../Function/is-function')

  , pattern;

pattern = /^\s*function\s*\(\s*_super\s*[,)]/;

module.exports = function (from, to) {
	return (isFunction(to) && isFunction(to) && to.toString().match(pattern)) ?
		curry(to, callBind(from)) : to;
};
