'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({

	name 			: String,
	email			: String,
	price			: String
	
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/node-login');

module.exports = mongoose.model('product', productSchema);