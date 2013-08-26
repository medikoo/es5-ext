'use strict';

module.exports = function (t, a) {
	var compiled;

	compiled = t.call('%raz% \\%\\% f%prik%oo %maroko%\n\\%mis\\1k\\2o%markas%%' +
		'moled%ech%%eloo%su%', {
			raz: true,
			prik: function (context) { return context.prik2; },
			markas: function (context) { return context.foo; },
			moled: true,
			su: true
		});

	a(compiled({ raz: 'raz1', prik2: 23, foo: 'morda', moled: 'eho',
		su: 'vivi' }), 'raz1 %% f23oo %maroko%\n%mis\\1k\\2omordaehoech%%eloovivi');
};
