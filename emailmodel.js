/**
 * Created by Karthick Eswar K R on 18/10/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var email = new Schema({
  emailId: {
    type: String,
    unique: true
  }
});
module.exports = mongoose.model('email', email);
