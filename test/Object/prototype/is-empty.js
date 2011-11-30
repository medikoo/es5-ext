'use strict';

module.exports = function (t, a) {
	a(t.call({}), true, "Empty");
	a(t.call({1:1}), false, "Not empty");
};
