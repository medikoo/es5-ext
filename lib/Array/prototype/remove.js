// Remove item from an array

'use strict';

module.exports = function (item) {
	var index = this.indexOf(item);
	if (index !== -1) {
		this.splice(index, 1);
	}
};
