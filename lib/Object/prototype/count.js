// Return count of properties

var keys = Object.keys;

module.exports = function () {
	return keys(this).length;
};
