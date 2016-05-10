// variables
var http = require('http');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//var config = require('./config/config_local.js');
var config = require('./config/config_prod.js');


// declaring routes
var deviceRouter = require('./routes/deviceRoute');
var userRouter = require('./routes/userRoute');


// setting configuration
var app = express();
app.set('port', config.server_port);
app.set('address', config.server_ip_address);
app.use(express.static('views/app'));

// set the view engine to ejs
// app.set('view engine', 'ejs');

// setting Routes
// app.get('/', indexPage.index);
app.use('/device', deviceRouter);
app.use('/user', userRouter);

// Connection Database

mongoose.connect(config.mongodb_connection_string);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Mongoose connected correctly to server");
});


// start http server
app.listen(app.get('port'), app.get('address'), function() {
  console.log(" Server started... ");
});
