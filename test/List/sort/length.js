'use strict';

module.exports = function (t, a) {
	var o = ['raz', 'dwar', 'tr'];
	o.sort(t);
	a.deep(o, ['tr', 'raz', 'dwar']);
};
