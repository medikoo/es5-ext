// Generate incremented id

module.exports = function (prefix, postfix) {
	var index = -1;
	prefix = prefix || '';
	postfix = postfix || '';
	return function () {
		return prefix + (++index).toString(36) + postfix;
	};
};
