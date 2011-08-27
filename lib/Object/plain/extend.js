// extend ES3 way, without descriptors)
// see ../extend.js for more details

'use strict';

var create     = Object.create
  , f          = require('../../Function/functionalize')
  , callBind   = require('../../Function/call-bind')
  , curry      = require('../../Function/curry').call
  , isFunction = require('../../Function/is-function')
  , oMap       = require('./map').call
  , merge      = require('./merge').call

  , pattern, fn;

pattern = /^\s*function\s*\(\s*_super\s*[,)]/;

fn = function (value, name) {
	if (isFunction(value) && isFunction(this[name]) &&
		 value.toString().match(pattern)) {
		return curry(value, callBind(this[name]));
	}
	return value;
};

module.exports = f(function (ext) {
	return merge(create(this), oMap(ext || {}, fn, this));
});
