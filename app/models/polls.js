'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
	id: String,
	name: String,
	ownerId: String,
	options: [{
		name: String,
		value: Number
	}]
});

module.exports = mongoose.model('Poll', Poll);