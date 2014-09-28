var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: String,
  study_group: String,
  jackpot: Number,
  users: [String],
  date: Date,
  questions: [{
    question: String,
    options: [String],
    user: String,
    answer: String
  }]
});

module.exports = mongoose.model( 'Event', EventSchema );
