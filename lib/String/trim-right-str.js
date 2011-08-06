// If given string matches end of scope string,
// trim right string by its length

'use strict';

var f = require('../Function/functionalize');

module.exports = f(function (s) {
	var l = s.length;
	return (this.slice(-l) === s) ? this.slice(0, -l) : this;
});
