var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");     // Needed for parsing the body
var app = express();


app.use('/assets',express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000,function(){
	console.log('Listening at port 3000...');
});

module.exports = app;
