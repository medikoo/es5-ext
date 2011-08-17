// Remove item from an array

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (item) {
	var index = this.indexOf(item);
	if (index !== -1) {
		this.splice(index, 1);
	}
});
