'use strict';

var o = {};

module.exports = function (t, a) {
	a.equal(t(o), o);
};
