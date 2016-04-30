var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Devices = require('../models/deviceSchema');

var deviceRouter = express.Router();
deviceRouter.use(bodyParser.json());
deviceRouter.route('/')

.get(function(req,res,next){

    Devices.find({}, function(err, device){
        if (err) {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end(err);
        }
        else {
          res.json(device);
        }
    });

})

.post(function(req, res, next){
    Devices.create(req.body, function(err, device){
        res.writeHead(200, {'Content-Type': 'text/plain'});

        if (err){
            res.end(err);
        }
        else {
          var id = device._id;
          res.end('Added the device with id ' + id);
        }

    });
})

.delete(function(req, res, next){
  Devices.remove({}, function(err, resp){
      if (err) throw err;

      res.json(resp);
  });
});

deviceRouter.route('/:deviceId')

.get(function(req,res,next){
    Devices.findByID(req.params.deviceId, function(err, resp){
      if (err) throw err;

      res.json(resp);
  });
})

.post(function(req, res, next){
    Devices.findByID(req.params.deviceId, function(err, resp){
      if (err) throw err;

      res.json(resp);
  });
})

.put(function(req, res, next){
    Devices.findByIdAndUpdate(req.params.deviceId,
        { $set: req.body },
        { new: true },
        function(err, device){
            if (err) throw err;

            res.json(device);

        });
})

.delete(function(req, res, next){
    Devices.remove(req.params.deviceId, function(err, resp){
        if (err) throw err;

        res.json(resp);
    });
});


module.exports = deviceRouter;
