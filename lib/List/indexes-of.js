// Find all indexes of given value

var f       = require('../Function/functionalize')
  , indexOf = require('./index-of/call');

module.exports = f(function (value) {
	var r = [], start = 0, i;
	while ((i = indexOf(this, value, start)) !== -1) {
		r.push(i);
		start = i + 1;
	}
	return r;
});
