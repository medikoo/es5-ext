'use strict';

module.exports = function (t, a) {
	var o = {};
	t('bar').call(o, 'foo');
	a.deep(o, { foo: 'bar' }, "#1");
	t('raz').call(o, 'dwa');
	a.deep(o, { foo: 'bar', dwa: 'raz' }, "#2");
};
