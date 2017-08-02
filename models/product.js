'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({

    iduser          : { type: Schema.Types.ObjectId, ref: 'user' },
	name 			: String,
	email			: String,
	price			: String
	
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://45.77.36.109:27017/node-login');

module.exports = mongoose.model('product', productSchema);