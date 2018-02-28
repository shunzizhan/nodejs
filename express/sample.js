var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello World!');
})

app.post('/',function(req,res){
	res.send('Got a Post request')
})

app.put('/user',function(req,res){
	res.send('Got a put request at /user')
})

app.delete('/user',function(req,res){
	res.send('Got a DELETE request at /user')
})