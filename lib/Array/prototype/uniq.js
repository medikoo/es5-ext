// Remove duplicates
//
// Name inspired by http://documentcloud.github.com/underscore/#uniq

'use strict';

module.exports = function () {
	var i;
	for (i = this.length; i >= 0; --i) {
		if (this.indexOf(this[i]) !== i) {
			this.splice(i, 1);
		}
	}
	return this;
};
