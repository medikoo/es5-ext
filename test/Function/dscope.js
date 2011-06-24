'use strict';

var f, o, org;

org = decodeURI;
f = function () {
	return c;
};
o = { c: {}, decodeURI: true };

module.exports = {
	"Dynamic scope": function (t, a) {
		a.equal(t(f, o), o.c);
	},
	"Reverts global properties": function (t, a) {
		t(f, o);
		a.equal(decodeURI, org);
	}
};
