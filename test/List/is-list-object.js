'use strict';

exports.__generic = function (t, a) {
	a.ok((typeof this === 'object') ? t(this) : !t(this));
};
