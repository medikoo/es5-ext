// Export all modules.
// We could as well scan file system but it won't work in browser environment.

'use strict';

module.exports = {
	aritize:       require('./aritize'),
	bindApply:     require('./bind-apply'),
	bindBind:      require('./bind-bind'),
	bindCall:      require('./bind-call'),
	curry:         require('./curry'),
	dscope:        require('./dscope'),
	flip:          require('./flip'),
	functionalize: require('./functionalize'),
	inherit:       require('./inherit'),
	invoke:        require('./invoke'),
	isFunction:    require('./is-function'),
	k:             require('./k'),
	noop:          require('./noop'),
	pluck:         require('./pluck'),
	s:             require('./s'),
	saturate:      require('./saturate'),
	sequence:      require('./sequence')
};
