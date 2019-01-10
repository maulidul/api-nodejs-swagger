/**
 * Created by irfan.maulana on 11/24/2015.
 */

var mongoose = require('../connection/connection');

var Schema = mongoose.Schema;
var Product = new Schema({
    name: String,
    password: String
});
var ProductModel = mongoose.model('users', Product);

module.exports = ProductModel;