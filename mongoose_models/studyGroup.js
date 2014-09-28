var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudyGroupSchema = new Schema({
  users: [String],
  name: String,
  events: [String],
  admin: String
});

module.exports = mongoose.model( 'StudyGroup', StudyGroupSchema );
