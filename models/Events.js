var mongoose = require('mongoose');

var Events = new mongoose.Schema({
  docType: { type: Boolean, default: false },
  title:  String,
  author: String,
  twitteravatar: String,
  body:   String,
  children: [ mongoose.Schema.Types.ObjectId ],
  declaration: [ mongoose.Schema.Types.ObjectId ],
  parent: mongoose.Schema.Types.ObjectId,
  date: { type: Date, default: Date.now },
  hidden: {type: Boolean, default: true},
  meta: {
    votes: Number,
    favs:  Number,
    insult: Number,
    discrimination: Number,
    hate: Number,
    violence: Number
  },
  source: [String],
  tags: [String]
});



module.exports = mongoose.model('Events', Events );
