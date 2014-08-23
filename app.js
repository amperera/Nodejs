var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//var path = require('path');

var app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');





mongoose.connect("mongodb://localhost/employee");

var UserSchema = new mongoose.Schema({
	name : String,
	email : String,
	age : Number
}),
	users = mongoose.model(users.UserSchema);

app.get(function(req, res){
	users.find({},function(err, docs){
		res.render('/users/index', {users:docs});
	});
});
app.get('/',function(req, res){
	res.render('index.jade');
});

app.get('/user/:id',function(req, res){
	res.send("<h1>helloe" + req.params.id + "!" );
});

app.listen(3000, function(){
	console.log('ready on port now');
});