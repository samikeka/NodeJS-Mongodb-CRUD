var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personSchema = new Schema({
  name:String , 
  lastName: String,
  email: String,
  phoneNumber: Number,
});

module.exports = mongoose.model("people", personSchema);
