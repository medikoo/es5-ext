// Find all indexes of given value

var indexOf = Array.prototype.indexOf

module.exports = function (value, fromIndex) {
	var r = [], i;
	while ((i = indexOf.call(this, value, fromIndex)) !== -1) {
		r.push(i);
		fromIndex = i + 1;
	}
	return r;
};
