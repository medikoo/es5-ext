// Returns elements that are not present in other list

'use strict';

var filter   = Array.prototype.filter
  , forEach  = Array.prototype.forEach
  , not      = require('../../Function/prototype/not')
  , copy     = require('./copy')
  , contains = require('./contains')
  , remove   = require('./remove');

module.exports = function (list) {
	var r;
	if (this.length > list.length) {
		r = copy.call(this);
		forEach.call(list, remove.bind(r));
		return r;
	} else {
		return filter.call(this, not.call(contains.bind(list)));
	}
};
