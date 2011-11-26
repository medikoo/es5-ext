// Export all modules.

'use strict';

module.exports = {
	functionalize: require('./functionalize'),
	getArgs:       require('./get-args'),
	getScope:      require('./get-scope'),
	i:             require('./i'),
	insert:        require('./insert'),
	invoke:        require('./invoke'),
	isArguments:   require('./is-arguments'),
	isFunction:    require('./is-function'),
	k:             require('./k'),
	log:           require('./log'),
	match:         require('./match'),
	memoize:       require('./memoize'),
	ncurry:        require('./ncurry'),
	noop:          require('./noop'),
	not:           require('./not'),
	once:          require('./once'),
	pluck:         require('./pluck'),
	remove:         require('./remove'),
	rcurry:        require('./rcurry'),
	rncurry:       require('./rncurry'),
	s:             require('./s'),
	sequence:      require('./sequence'),
	silent:        require('./silent')
};
