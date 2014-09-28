var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  answers: {},
  name: String,
  study_group: String,
  jackpot: Number,
  users: [String],
  date: Date,
  max_time_per_event: Number,
  max_time_per_question: Number,
  questions: [{
    question: String,
    alternatives: [String],
    user: String,
    answer: String
  }],
  price: Number,
  total_question_per_event: Number,
  quiz: {}
});

module.exports = mongoose.model( 'Event', EventSchema );
