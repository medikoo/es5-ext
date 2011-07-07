// Export all modules.
// We could as well scan file system but it won't work in browser environment.

'use strict';

module.exports = {
	clone:         require('./clone'),
	compare:       require('./compare'),
	elevate:       require('./elevate'),
	every:         require('./every'),
	filter:        require('./filter'),
	forEach:       require('./for-each'),
	isEmpty:       require('./is-empty'),
	isPlainObject: require('./is-plain-object'),
	link:          require('./link'),
	map:           require('./map'),
	merge:         require('./merge'),
	pluck:         require('./pluck'),
	same:          require('./same'),
	setTrue:       require('./set-true'),
	setValue:      require('./set-value'),
	set:           require('./set'),
	values:        require('./values')
};
