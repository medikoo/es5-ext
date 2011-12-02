'use strict';

module.exports = function (t, a) {
	t = t();

	a(t.call('ra\nzz', 0), 'ra\nzz', "Nest 0");
	a(t.call('ra\nzz'), '\tra\n\tzz', "Nest default");
	a(t.call('ra\nzz', 3), '\t\t\tra\n\t\t\tzz', "Deep nest");
	a(t.call('ra\nzz', null, true), 'ra\n\tzz', "Option to not indent first line");
	a(t.call('ra\nzz\nsss\nfff\n', null), '\tra\n\tzz\n\tsss\n\tfff\n', "Multi-line");
	a(t.call('ra\n\nzz\n'), '\tra\n\n\tzz\n', "Don't touch empty lines");
};
