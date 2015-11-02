var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExperienceSchema = new Schema({
  title: String,
  employer: String,
  startDate: String,
  endDate: String
}, { collection: 'experience' });

mongoose.model('Experience', ExperienceSchema);
