'use strict';

module.exports = {
	global:       require('./global'),
	guid:         require('./guid'),
	isPrimitive:  require('./is-primitive'),
	reserved:     require('./reserved'),
	validValue:   require('./valid-value'),

	Array:        require('./Array'),
	Boolean:      require('./Boolean'),
	Date:         require('./Date'),
	Error:        require('./Error'),
	Function:     require('./Function'),
	Math:         require('./Math'),
	Number:       require('./Number'),
	Object:       require('./Object'),
	RegExp:       require('./RegExp'),
	String:       require('./String')
};
