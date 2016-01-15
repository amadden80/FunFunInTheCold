var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.render('index');

var port = 8080;
app.listen(port, function(){
  console.log('Listneing on port ' + port);
});
