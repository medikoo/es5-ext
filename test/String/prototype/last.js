'use strict';

module.exports = function (t, a) {
	a(t.call(''), null, "Null");
	a(t.call(), 'd', "Undefined");
	a(t.call('abcdef'), 'f', "String");
};
