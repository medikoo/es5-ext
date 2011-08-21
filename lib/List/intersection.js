// Computes the list of values that are the intersection of all the arrays
//
// Inspired by: http://documentcloud.github.com/underscore/#intersection

'use strict';

var f = require('../Function/functionalize')
  , contains = require('./contains').bind
  , filter   = require('./filter').call;

module.exports = f(function (list) {
	return (this.length > list.length) ?
		filter(list, contains(this)) : filter(this, contains(list));
});
