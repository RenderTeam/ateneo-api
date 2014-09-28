var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InvitationSchema = new Schema({
  from: String,
  to: String,
  date: { type: Date, default: Date.now() },
  study_group: String
});

module.exports = mongoose.model( 'Invitation', InvitationSchema );
