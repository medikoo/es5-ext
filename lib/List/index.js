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
	first:               require('./first'),
	exclusion:           require('./exclusion'),
	filter:              require('./filter'),
	find:                require('./find'),
	findSameStartLength: require('./find-same-start-length'),
	flatten:             require('./flatten'),
	forEach:             require('./for-each'),
	forEachRight:        require('./for-each-right'),
	forEachSimple:       require('./for-each-simple'),
	indexOf:             require('./index-of'),
	indexesOf:           require('./indexes-of'),
	intersection:        require('./intersection'),
	isListObject:        require('./is-list-object'),
	isList:              require('./is-list'),
	join:                require('./join'),
	map:                 require('./map'),
	mapRight:            require('./map-right'),
	peek:                require('./peek'),
	reduce:              require('./reduce'),
	shiftSame:           require('./shift-same'),
	slice:               require('./slice'),
	some:                require('./some'),
	someValue:           require('./some-value'),
	someRight:           require('./some-right'),
	sorted:              require('./sorted'),
	toArray:             require('./to-array')
};
