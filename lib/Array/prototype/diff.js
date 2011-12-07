// Returns elements that are not present in other list

'use strict';

var filter   = Array.prototype.filter
  , forEach  = Array.prototype.forEach
  , toObject = require('../../to-object')
  , not      = require('../../Function/prototype/not')
  , copy     = require('./copy')
  , contains = require('./contains')
  , remove   = require('./remove');

module.exports = function (list) {
	var r, self;
	self = toObject(this);
	if (self.length > list.length) {
		r = copy.call(self);
		forEach.call(list, remove.bind(r));
		return r;
	} else {
		return filter.call(self, not.call(contains.bind(list)));
	}
};
