// extend ES3 way, no descriptors involved
// see ../extend.js for more details

'use strict';

var create     = Object.create
  , map        = require('../plain/map').call
  , merge      = require('../plain/merge').call
  , currySuper = require('./_curry_super')

  , fn;

fn = function (value, name) {
	return currySuper(this[name], value, this);
};

module.exports = function (ext) {
	return merge(create(this), map(ext || {}, fn, this));
};
