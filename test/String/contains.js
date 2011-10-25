'use strict';

module.exports = function (t, a) {
	var o, x = {}, y = {};
	t = t.call;

	a(t('raz', ''), true, "Empty");
	a(t('', ''), true, "Both Empty");
	a(t('raz', 'raz'), true, "Same");
	a(t('razdwa', 'raz'), true, "Starts with");
	a(t('razdwa', 'dwa'), true, "Ends with");
	a(t('razdwa', 'zdw'), true, "In middle");
	a(t('', 'raz'), false, "Something in empty");
	a(t('az', 'raz'), false, "Longer");
	a(t('azasdfasdf', 'azff'), false, "Not found");
};
