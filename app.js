
// variables
var http = require('http');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// declaring routes
var deviceRouter = require('./routes/deviceRoute');


// setting configuration
app.set('port', 80);


// setting Routes
app.use('/device', deviceRouter);


// Connection Database
var url = 'mongodb://localhost:27017/baseespiao';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("Mongoose connected correctly to server");
});


// start http server
http.createServer(app).listen(app.get('port'), function(req, res){
  console.log('Express server listening on port ' + req);
});
