'use strict';

module.exports = function (t, a) {
	t = t.call;
	var o = { 1: 'raz', 2: 'dwa', 3: 'trzy' }
	  , no = t(o);

	a.not(no, o, "Return different object");
	a(JSON.stringify(no), JSON.stringify(o), "Match properties and values");
};
