
// variables
var http = require('http');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var indexPage = require('./routes/index');


// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
// var mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME;

var server_port = 3000;
var server_ip_address = "localhost"
var mongodb_connection_string = 'mongodb://localhost:27017/' + 'espiaolegal';

// declaring routes
var deviceRouter = require('./routes/deviceRoute');


// setting configuration
var app = express();
app.set('port', server_port);
app.set('address', server_ip_address);
app.use(express.static('views/app'));

// set the view engine to ejs
// app.set('view engine', 'ejs');

// setting Routes
// app.get('/', indexPage.index);
app.use('/device', deviceRouter);

// Connection Database

mongoose.connect(mongodb_connection_string);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Mongoose connected correctly to server");
});


// start http server
app.listen(app.get('port'), app.get('address'), function() {
  console.log(" Server started... ");
});
