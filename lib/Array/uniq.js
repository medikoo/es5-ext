// Remove duplicates
//
// Name inspired by http://documentcloud.github.com/underscore/#uniq

'use strict';

var f = require('../Function/functionalize')

  , rcb, fcb;

rcb = function (idxs, item, i) {
	if (this.indexOf(item) !== i) {
		idxs.push(i - idxs.length);
	}
	return idxs;
};

fcb = function (i) {
	this.splice(i, 1);
};

module.exports = f(function () {
	this.reduce(rcb.bind(this), []).forEach(fcb, this);
	return this;
});
