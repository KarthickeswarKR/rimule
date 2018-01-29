var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.set('port', process.env.PORT);
if (!app.get('port')) {
  app.set('port', 3000);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get("/presale",function(req,res,next){
  res.send({
"_id":"5623656653",
"totalSupply":1,000,000,000.00,
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
})// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
