'use strict';

module.exports = function (t, a) {
	a.equal(typeof t(1,2,3), 'undefined');
};
