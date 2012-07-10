'use strict';

var forEach = Array.prototype.forEach
  , splice  = Array.prototype.splice
  , indexOf = require('./e-index-of');

module.exports = function (item) {
	forEach.call(arguments, function (item) {
		var index = indexOf.call(this, item);
		if (index !== -1) {
			splice.call(this, index, 1);
		}
	}, this);
};
