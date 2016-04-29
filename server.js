
// variables
var http = require('http');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

// declaring routes
var deviceRouter = require('./routes/deviceRoute');


// setting configuration
app.set('port', server_port);
app.set('address', server_ip_address);

// setting Routes
app.use('/device', deviceRouter);

//provide a sensible default for local development
var mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + 'espiaolegal';
//var mongodb_connection_string = 'mongodb://localhost:27017/baseespiao';

//take advantage of openshift env vars when available:
if(process.env.OPENSHIFT_MONGODB_DB_URL){
  mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + 'espiaolegal';
}

// Connection Database

mongoose.connect(mongodb_connection_string);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("Mongoose connected correctly to server");
});

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/html' });
res.end('<html><body><h1>Hello World</h1></body></html>');
});

// start http server
server.listen(app.get('port'), app.get('address'), function(){
  console.log("Listening on " + app.get('address') + ", server_port " + app.get('port'))
});
