// Create web server
// 1. npm install express
// 2. npm install body-parser

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));

// Create web server
app.listen(3000, function(){
    console.log('Server running at http://