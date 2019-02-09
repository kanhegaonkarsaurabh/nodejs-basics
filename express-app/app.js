var http = require('http');									 // For fetching data via some external api
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");     // Needed for parsing the body
var app = express();


app.use('/assets',express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//for /index page
app.get('/', function(request,response){
	response.sendFile('index.html',{root:path.join(__dirname,'./views')});
});

//for /home page
app.get('/home', function(request,response){
	response.sendFile('home.html',{root:path.join(__dirname,'./views')});
});

//for /about page
app.get('/about', function(request,response){
	response.sendFile('about.html',{root:path.join(__dirname,'./views')});
});

//for /contact page
app.get('/contact', function(request,response){
	response.sendFile('contact.html',{root:path.join(__dirname,'./views')});
});

// To get the feedback from the user to 
app.post('/contact', function(request, response) {
	if (request.body) {
		response.sendFile('thanks.html', {root:path.join(__dirname,'./views')})
	}
});


// External api stuff 
request('https://restcountries.eu/rest/v2/name/india', {json: true}, (err, req, res) => {
	if (err) console.log('OOOPS!');
	console.log(res.body);
});


app.listen(3000,function(){
	console.log('Listening at port 3000...');
});

module.exports = app;
