// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// create a schema
var userSchema = new Schema({
  username: {
      type: String,
      required: true
  },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

userSchema.plugin(passportLocalMongoose);

// make this available to our Node applications
module.exports = mongoose.model('User', userSchema);
