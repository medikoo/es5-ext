// Remove item from an array

'use strict';

var indexOf = Array.prototype.indexOf
  , splice  = Array.prototype.splice;

module.exports = function (item) {
	var index = indexOf.call(this, item);
	if (index !== -1) {
		splice.call(this, index, 1);
	}
};
