// Export all modules.
// We could as well scan file system but it won't work in browser environment.

'use strict';

module.exports = {
	compact:             require('./compact'),
	concat:              require('./concat'),
	every:               require('./every'),
	filter:              require('./filter'),
	findSameStartLength: require('./find-same-start-length'),
	flatten:             require('./flatten'),
	forEach:             require('./for-each'),
	isListObject:        require('./is-list-object'),
	isList:              require('./is-list'),
	map:                 require('./map'),
	peek:                require('./peek'),
	reduce:              require('./reduce'),
	shiftSame:           require('./shift-same'),
	slice:               require('./slice'),
	some:                require('./some'),
	sort:                require('./sort'),
	toArray:             require('./to-array')
};
