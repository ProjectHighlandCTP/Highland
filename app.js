var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send('Success!');
});

app.get('/home', function(req,res){
	res.render('home');
});

app.get('/wines', function(req,res){
	res.send('wines!');
});

app.get('/spirits', function(req,res){
	res.send('spirits!');
});

app.get('/policies', function(req,res){
	res.render('policies');
});

app.get('*', function(req,res){
	res.send('badroute!');
});

var server = app.listen(3000, function(){
	console.log('Listening on port 3000');
});