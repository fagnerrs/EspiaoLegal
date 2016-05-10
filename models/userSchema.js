// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name: {
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

// the schema is useless so far
// we need to create a model using it
var Users = mongoose.model('User', userSchema);

// make this available to our Node applications
module.exports = Users;
