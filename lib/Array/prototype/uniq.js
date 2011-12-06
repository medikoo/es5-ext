// Remove duplicates
//
// Name inspired by http://documentcloud.github.com/underscore/#uniq

'use strict';

var filter  = Array.prototype.filter
  , indexOf = Array.prototype.indexOf

  , isFirst;

isFirst = function (value, index) {
	return indexOf.call(this, value) === index;
};

module.exports = function () {
	return filter.call(this, isFirst, this);
};
