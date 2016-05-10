var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('.././config/config_prod.js');

var Users = require('../models/userSchema');

var userRouter = express.Router();
userRouter.use(bodyParser.json());
userRouter.route('/')

.get(function(req,res,next){

    //Users.find({}, function(err, user){
//        if (err) {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end(config.mongodb_connection_string);
        // }
        // else {
        //   res.json(user);
        // }
    //});

})

.post(function(req, res, next){
    Users.create(req.body, function(err, user){
        res.writeHead(200, {'Content-Type': 'text/plain'});

        if (err){
            res.end(err);
        }
        else {
          var id = user._id;
          res.end('Added the user with id ' + id);
        }

    });
})

.delete(function(req, res, next){
  Users.remove({}, function(err, resp){
      if (err) throw err;

      res.json(resp);
  });
});

userRouter.route('/:userId')

.get(function(req,res,next){
    Users.findByID(req.params.userId, function(err, resp){
      if (err) throw err;

      res.json(resp);
  });
})

.post(function(req, res, next){

    Users.findByID(req.params.userId, function(err, resp){
      if (err) throw err;

      res.json(resp);
  });
})

.put(function(req, res, next){
    Users.findByIdAndUpdate(req.params.userId,
        { $set: req.body },
        { new: true },
        function(err, user){
            if (err) throw err;

            res.json(user);

        });
})

.delete(function(req, res, next){
    Users.remove(req.params.userId, function(err, resp){
        if (err) throw err;

        res.json(resp);
    });
});


module.exports = userRouter;
