'use strict';

var f, o, org;

org = decodeURI;
f = function () {
	return c;
};
o = { c: {}, decodeURI: true };

module.exports = function (t, a) {
	a(t.call(f, o), o.c, "Dynamic scope");

	t.call(f, o);
	a(decodeURI, org, "Reverts global properties");
};
