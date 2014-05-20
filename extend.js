'use strict';

var assign = require('./object/assign')
  , keys = require('./object/keys')
  , objectFilter = require('./object/filter')
  , extension = require('./index')

  , extend
  , extractStaticMethods
  , extractInstanceMethods;

extend = function(staticMethods, instanceMethods) {
	var availableMethods = keys(staticMethods || {}).concat(keys(instanceMethods) || {});

	return function(nativeObject, methods, descriptorOptions) {
		var listOfMethods = availableMethods;

		if (!Array.isArray(methods)) {
			descriptorOptions = methods;
			methods = undefined;
		}

		descriptorOptions = assign({
			writable: false,
			enumerable: false,
			configurable: false
		}, descriptorOptions || {});

		if (methods && methods.length) {
			listOfMethods = listOfMethods.filter(function(name) {
				return methods.indexOf(name) !== -1;
			});
		}

		listOfMethods.forEach(function(methodName) {
			if (methodName in staticMethods) {
				descriptorOptions.value = staticMethods[methodName]
				Object.defineProperty(nativeObject, methodName, descriptorOptions);
			}

			if (methodName in instanceMethods) {
				descriptorOptions.value = instanceMethods[methodName];
				Object.defineProperty(nativeObject.prototype, methodName, descriptorOptions);
			}
		});
	};
};

extractStaticMethods = function(object) {
	return objectFilter(object, function(value, key) {
		return key !== '#';
	}) || {};
};

extractInstanceMethods = function(object) {
	return object['#'] || {};
};

['array', 'boolean', 'date', 'error', 'function', 'math', 'number', 'object', 'regExp', 'string'].forEach(function(key) {
	var methods = extension[key];

	exports[key] = extend(extractStaticMethods(methods), extractInstanceMethods(methods));
});
