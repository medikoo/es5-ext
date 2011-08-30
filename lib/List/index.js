// Export all modules.
// We could as well scan file system but it won't work in browser environment.

'use strict';

module.exports = {
	clone:               require('./clone'),
	compact:             require('./compact'),
	concat:              require('./concat'),
	contains:            require('./contains'),
	diff:                require('./diff'),
	every:               require('./every'),
	exclusion:           require('./exclusion'),
	filter:              require('./filter'),
	findSameStartLength: require('./find-same-start-length'),
	flatten:             require('./flatten'),
	forEach:             require('./for-each'),
	indexOf:             require('./index-of'),
	intersection:        require('./intersection'),
	isListObject:        require('./is-list-object'),
	isList:              require('./is-list'),
	map:                 require('./map'),
	peek:                require('./peek'),
	reduce:              require('./reduce'),
	shiftSame:           require('./shift-same'),
	slice:               require('./slice'),
	some:                require('./some'),
	toArray:             require('./to-array')
};
