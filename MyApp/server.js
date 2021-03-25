'use strict';
//var http = require('http');
//var port = process.env.PORT || 1337;
//var fs = require('fs');


//fs.readdir('./static/index.html', function (err, html) {

//    if (err) throw err;

//    http.createServer(function (request, response) {
//        response.writeHeader(200, { "Content-Type": "*" });
//        //response.writeHeader(200, { "Content-Type": "text/css" });
//        //response.writeHeader(200, { "Content-Type": "text/javascript" });
//        response.write(html);
//        response.end();
//    }).listen(port);
//});
var express = require('express'); // Express web server framework
var app = express();
app.use(express.static(__dirname + '/static'));
console.log('Listening on 1337');
app.listen(1337);