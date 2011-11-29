// Export all modules.
// We could as well scan file system but it won't work in browser environment.

'use strict';

module.exports = {
	global:      require('./global'),
	isPrimitive: require('./is-primitive'),
	reserved:    require('./reserved'),
	toObject:    require('./to-object'),

	Array:       require('./Array'),
	Boolean:     require('./Boolean'),
	Date:        require('./Date'),
	Error:       require('./Error'),
	Function:    require('./Function'),
	Number:      require('./Number'),
	Object:      require('./Object'),
	RegExp:      require('./RegExp'),
	String:      require('./String')
};
