// Whether list contains the given object.
//
// Name inspired by Closure library: http://closure-library.googlecode.com/svn/trunk/closure/goog/string/string.js

'use strict';

var f       = require('../Function/functionalize')
  , indexOf = require('./index-of/call');

module.exports = f(function (x) {
	return (this.indexOf ? this.indexOf(x) : indexOf(this, x)) > -1;
});
