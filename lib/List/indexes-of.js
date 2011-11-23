// Find all indexes of given value

var indexOf = Array.prototype.indexOf
  , f       = require('../Function/functionalize')

module.exports = f(function (value) {
	var r = [], start = 0, i;
	while ((i = indexOf.call(this, value, start)) !== -1) {
		r.push(i);
		start = i + 1;
	}
	return r;
});
