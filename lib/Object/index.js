// Export all modules.
// We could as well scan file system but it won't work in browser environment.

'use strict';

module.exports = {
	bindMethods:   require('./bind-methods'),
	clone:         require('./clone'),
	compare:       require('./compare'),
	elevate:       require('./elevate'),
	every:         require('./every'),
	extend:        require('./extend'),
	filter:        require('./filter'),
	forEach:       require('./for-each'),
	isEmpty:       require('./is-empty'),
	isObject:      require('./is-object'),
	isPlainObject: require('./is-plain-object'),
	link:          require('./link'),
	map:           require('./map'),
	merge:         require('./merge'),
	pluck:         require('./pluck'),
	same:          require('./same'),
	set:           require('./set'),
	setTrue:       require('./set-true'),
	setValue:      require('./set-value'),
	values:        require('./values')
};
