// Whether two objects are equal, takes into account NaN and -0/+0 cases:
// http://www.2ality.com/2012/03/stricter-equality.html

'use strict';

module.exports = function (arg0, arg1) {
	if ((arg0 !== arg0) && (arg1 !== arg1)) { //jslint: skip
		// NaN, NaN
		return true;
	} else if ((arg0 === 0) && (arg1 === 0)) { //jslint: skip
		// +/-0, +/-0
		return ((1 / arg0) === (1 / arg1));
	}
	return arg0 === arg1;
};
