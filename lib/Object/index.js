// Export all modules.
// We could as well scan file system but it won't work in browser environment.

'use strict';

module.exports = {
	bindMethods: require('./bind-methods'),
	every:       require('./every'),
	extend:      require('./extend'),
	merge:       require('./merge'),
	plain:       require('./plain'),
	pluck:       require('./pluck'),
	same:        require('./same')
};
