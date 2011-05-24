// f.call shortcut

'use strict';

module.exports = function (f) {
	return f.call.bind(f);
};
