'use strict';

const { preprocess } = require('jsx-vanilla');
	
module.exports = function(source) {
	return preprocess(source);
};
