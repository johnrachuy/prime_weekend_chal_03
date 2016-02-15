var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var calculate = require('./routes/calculate');

app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT);

app.post('/calculate', function(req,res){
    var total = {};
    total.value = (calculate(req.body));
    res.send(total);
});

app.get('/*', function(req,res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname,'./public/',file))
});

app.listen(app.get('port'), function(){
    console.log('Listening on port: ', app.get('port'));
});