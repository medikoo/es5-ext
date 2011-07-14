'use strict';

module.exports = function (t, a) {
	t = t.call;
	a.equal(t({}), {}.toString());
};
