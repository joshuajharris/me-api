var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeSchema = new Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  age: Number
}, { collection: 'me' });

mongoose.model('Me', MeSchema);
