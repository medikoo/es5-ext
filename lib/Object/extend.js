// Same as Object.create but enables super calls
// If function property is found in both objects, and child function arguments
// list starts with '_super' argument, then it will be extended such as child
// method will receive descendand.call method as first argument.

'use strict';

var create     = Object.create
  , f          = require('../Function/functionalize')
  , callBind   = require('../Function/call-bind')
  , curry      = require('../Function/curry').call
  , isFunction = require('../Function/is-function')
  , copy       = require('./plain/clone').call
  , oMap       = require('./plain/map').call

  , pattern, fn;

pattern = /^\s*function\s*\(\s*_super\s*[,)]/;

fn = function (desc, name) {
	desc = copy(desc);
	if (isFunction(desc.value) && isFunction(this[name]) &&
		 desc.value.toString().match(pattern)) {
		desc.value = curry(desc.value, callBind(this[name]));
	}
	return desc;
};

module.exports = f(function (descriptors) {
	return create(this, oMap(descriptors || {}, fn, this));
});
