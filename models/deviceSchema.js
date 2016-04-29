// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var deviceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    strongkey: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Devices = mongoose.model('Dish', deviceSchema);

// make this available to our Node applications
module.exports = Devices;
