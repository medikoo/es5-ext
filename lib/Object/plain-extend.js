// extend ES3 way, no descriptors involved
// see ../extend.js for more details

'use strict';

var create     = Object.create
  , map        = require('./map')
  , extend      = require('./extend')
  , currySuper = require('./_curry_super')

  , fn;

fn = function (value, name) {
	return currySuper(this[name], value, this);
};

module.exports = function (obj, properties) {
	return extend(create(obj), map(properties || {}, fn, obj));
};
