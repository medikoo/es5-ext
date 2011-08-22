// Export all modules.
// We could as well scan file system but it won't work in browser environment.

'use strict';

module.exports = {
	clone:         require('./clone'),
	compare:       require('./compare'),
	diff:          require('./diff'),
	elevate:       require('./elevate'),
	every:         require('./every'),
	filter:        require('./filter'),
	first:         require('./first'),
	forEach:       require('./for-each'),
	isEmpty:       require('./is-empty'),
	isPlainObject: require('./is-plain-object'),
	keyOf:         require('./key-of'),
	link:          require('./link'),
	map:           require('./map'),
	merge:         require('./merge'),
	pluck:         require('./pluck'),
	same:          require('./same'),
	some:          require('./some'),
	setTrue:       require('./set-true'),
	setValue:      require('./set-value'),
	set:           require('./set'),
	toArray:       require('./to-array'),
	values:        require('./values')
};
