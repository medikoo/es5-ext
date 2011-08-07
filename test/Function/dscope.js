'use strict';

var f, o, org;

org = decodeURI;
f = function () {
	return c;
};
o = { c: {}, decodeURI: true };

module.exports = function (t, a) {
	t = t.call;
	a(t(f, o), o.c, "Dynamic scope");

	t(f, o);
	a(decodeURI, org, "Reverts global properties");
};
