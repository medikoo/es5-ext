'use strict';

var filter   = Array.prototype.filter
  , forEach  = Array.prototype.forEach
  , valid    = require('../../valid-value')
  , not      = require('../../Function/prototype/not')
  , copy     = require('./copy')
  , contains = require('./contains')
  , remove   = require('./remove');

module.exports = function (other) {
	var r;
	valid(this) && valid(other);
	if (this.length > other.length) {
		r = copy.call(this);
		forEach.call(other, remove.bind(r));
		return r;
	} else {
		return filter.call(this, not.call(contains.bind(other)));
	}
};
