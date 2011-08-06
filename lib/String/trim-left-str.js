// If given string matches begininng of scope string,
// trim left string by its length

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (s) {
	var l = s.length;
	return (this.slice(0, l) === s) ? this.slice(l) : this;
});
