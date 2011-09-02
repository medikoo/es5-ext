// Returns elements that are not present in other list

'use strict';

var f        = require('../Function/functionalize')
  , not      = require('../Function/not').call
  , clone    = require('./clone').call
  , contains = require('./contains').bind
  , filter   = require('./filter/call')
  , forEach  = require('./for-each/call')
  , remove   = require('../Array/remove').bind;

module.exports = f(function (list) {
	var r;
	if (this.length > list.length) {
		r = clone(this);
		forEach(list, remove(r));
		return r;
	} else {
		return filter(this, not(contains(list)));
	}
});
