// Export all modules.
// We could as well scan file system but it won't work in browser environment.

'use strict';

module.exports = {
	compact: require('./compact'),
	concat:  require('./concat'),
	every:   require('./every'),
	filter:  require('./filter'),
	flatten: require('./flatten'),
	forEach: require('./for-each'),
	isList:  require('./is-list'),
	map:     require('./map'),
	reduce:  require('./reduce'),
	slice:   require('./slice'),
	some:    require('./some'),
	toArray: require('./to-array')
};
