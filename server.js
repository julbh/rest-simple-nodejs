var express = require('express');
var app = express();
var fs = require("fs");
const cors = require("cors");

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      // console.log(users);
      // var user = users["user" + req.params.id] 
      // console.log( user );
      res.send( JSON.stringify(users));
   });
})

app.get('/', function (req, res) {
  // First read existing users.
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     var users = JSON.parse( data );
     // console.log(users);
     // var user = users["user" + req.params.id] 
     // console.log( user );
     res.send( JSON.stringify(users));
  });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})