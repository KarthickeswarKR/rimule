var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var emailmodel=require('./emailmodel.js')
var app = express();
var db = require('./db/mongoose');
app.set('port', process.env.PORT);
if (!app.get('port')) {
  app.set('port', 3000);

}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get("/presale",function(req,res,next){
  res.send({
"_id":"5623656653",
"totalSupply":1000000000,
"startDate":"2/2/2018",
"endDate":"2/3/2018",
"hardCap":25500000,
"softCap":1500000,
"tokensSold":1542500,
"tokenPrice":500,
"discountPercentage":30,
"tokensRemaining":23957500,
"paymentAddress":"0xd11df53d21s5f2sfsd521fdsafs"
});
})
app.post("/addemailId",function(req,res,next){
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(req.body.emailId)){
emailmodel.findOne({emailId:req.body.emailId},function(err,data){
  if(err){
    console.log(err);
    res.status(500).send({
      "status": "error",
      "message": "Internal server error",
      "code": 500
    });
  }else if(data){
    res.status(520).send({
      "status": "error",
      "message": "emailId already exist",
      "code": 520
    });
  }else{
    var newemail=new emailmodel({
      emailId:req.body.emailId
    })
    newemail.save(function(err,info){
      if(err){
        console.log(err);
        res.status(500).send({
          "status": "error",
          "message": "Internal server error",
          "code": 500
        });
      }else{
        res.status(200).send({
          "status": "success",
          "message": "email added successfully",
          "code": 200
        });
      }
    })
  }
})
    }else{
      res.status(625).send({
        "status": "error",
        "message": "emaild is not in correct format",
        "code": 625
      });
    }
})
// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
