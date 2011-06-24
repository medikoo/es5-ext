'use strict';

module.exports = function (t, a) {
	var o = { 1: 'raz', 2: 'dwa', 3: 'trzy' }
	  , no = t.call(o);

	return {
		"Return different object": function (t, a) {
			a.notEqual(o, no);
		},
		"Match properties and values": function (t, a) {
			a.equal(JSON.stringify(o), JSON.stringify(no));
		}
	};
};
