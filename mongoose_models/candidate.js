var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CandidateSchema = new Schema({
  username: String,
  mail: String
});

module.exports = mongoose.model( 'Candidate', CandidateSchema );
