// map, starting from last element

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (fn, scope) {
	scope = scope || this;
	var resultArray = [], res;
	for (var i = this.length; i >= 0; --i) {
		if (this.hasOwnProperty(i)) {
			res = fn.call(scope, this[i], i, this);
			if(res)	{
				resultArray.push(res);
			}
		}
	}
	return resultArray;
});
