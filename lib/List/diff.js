// Returns elements that are not present in other list

'use strict';

var f        = require('../Function/functionalize')
  , not      = require('../Function/not').call
  , copy     = require('../Array/prototype/copy')
  , contains = require('../Array/prototype/contains')
  , filter   = require('./filter/call')
  , forEach  = require('./for-each/call')
  , remove   = require('../Array/prototype/remove');

module.exports = f(function (list) {
	var r;
	if (this.length > list.length) {
		r = copy.call(this);
		forEach(list, remove.bind(r));
		return r;
	} else {
		return filter(this, not(contains.bind(list)));
	}
});
