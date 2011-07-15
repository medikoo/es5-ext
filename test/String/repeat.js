'use strict';

module.exports = {
	"Empty": function (t, a) {
		return a.strictEqual(t('a', 0), '');
	},
	"1": function (t, a) {
		return a.equal(t('a', 1), 'a');
	},
	"Whitespace": function (t, a) {
		return a.equal(t('\t', 5), '\t\t\t\t\t');
	},
	"Many chars": function (t, a) {
		return a.equal(t('raz', 3), 'razrazraz');
	}
};
