// Delete property

'use strict';

module.exports = function (name) {
	delete this[name];
};
