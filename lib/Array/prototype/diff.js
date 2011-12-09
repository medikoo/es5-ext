// Returns elements that are not present in other list

'use strict';

var filter        = Array.prototype.filter
  , forEach       = Array.prototype.forEach
  , assertNotNull = require('../../assert-not-null')
  , not           = require('../../Function/prototype/not')
  , copy          = require('./copy')
  , contains      = require('./contains')
  , remove        = require('./remove');

module.exports = function (other) {
	var r;
	assertNotNull(this);
	assertNotNull(other);
	if (this.length > other.length) {
		r = copy.call(this);
		forEach.call(other, remove.bind(r));
		return r;
	} else {
		return filter.call(this, not.call(contains.bind(other)));
	}
};
