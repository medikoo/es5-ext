'use strict';

module.exports = function (t, a) {
	t = t();

	return {
		"Nest 0": function (x, a) {
			a.equal(t('ra\nz', 0), 'ra\nz');
		},
		"Nest default": function (x, a) {
			a.equal(t('ra\nz'), '\tra\n\tz');
		},
		"Nest few times": function (x, a) {
			a.equal(t('ra\nz', 3), '\t\t\tra\n\t\t\tz');
		},
		"Do not nest empty lines": function (x, a) {
			a.equal(t('ra\n\nz\n'), '\tra\n\n\tz\n');
		}
	};
};
