// extend ES3 way, no descriptors involved
// see ../extend.js for more details

'use strict';

var create     = Object.create
  , f          = require('../../Function/functionalize')
  , oMap       = require('./map').call
  , merge      = require('./merge').call
  , currySuper = require('../_curry_super')

  , fn;

fn = function (value, name) {
	return currySuper(this[name], value, this);
};

module.exports = f(function (ext) {
	return merge(create(this), oMap(ext || {}, fn, this));
});
