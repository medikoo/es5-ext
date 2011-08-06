// Export all modules.
// We could as well scan file system but it won't work in browser environment.

'use strict';

module.exports = {
	global:   require('./global'),
	reserved: require('./reserved'),

	Array:    require('./Array'),
	Date:     require('./Date'),
	Function: require('./Function'),
	List:     require('./List'),
	Number:   require('./Number'),
	Object:   require('./Object'),
	String:   require('./String')
};
