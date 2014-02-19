'use strict';

module.exports = function (t, a) {
	a.deep(t.call(/foo/, 'barfoo'), 3);
};
