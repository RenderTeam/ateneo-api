var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  username: String,
  mail: String
});

module.exports = mongoose.model( 'Event', EventSchema );
