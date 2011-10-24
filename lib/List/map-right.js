// map, starting from last element

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (fn, scope) {
	var resultArray = new Array(this.length), count = 0;
	for (var i = this.length-1; i >= 0; i--) {
		if (this.hasOwnProperty(i)) {
			resultArray[count] = (fn.call(scope, this[i], i, this));
		}
		count++;
	}
	return resultArray;
});
