var http = require('http');
//create a server object:
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
var url = req.url;
 if(url ==='/about'){
    if (url == '/about/members') {
      res.write('<h1>many members, yikes. cannot print</h1>')
    }
    res.write('<h1>about us page<h1>'); //write a response
    res.end(); //end the response
 }else if(url ==='/contact'){
    res.write('<h1>Find us on facebook under UCSD CSES<h1>'); //write a response
    res.end(); //end the response
 }else{
    res.write('<h1>CSES-UCSD<h1>'); //write a response
    res.end(); //end the response
 }
}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});