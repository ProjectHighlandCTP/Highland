var express = require('express'),
	app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.send('Success!');
});

app.get('/home', function(req,res){
	res.render('home', {
		title: 'Home',
	});
});

app.get('/wines', function(req,res){
	res.render('wines', {
		title: "Wines"
	});
});

app.get('/spirits', function(req,res){
	res.render('spirits', {
		title: 'Spirits'
	});
});

app.get('/policies', function(req,res){
	res.render('policies',{
		title: 'policies'
	});
});

app.get('*', function(req,res){
	res.send('badroute!');
});

var server = app.listen(3000, function(){
	console.log('Listening on port 3000');
});