var app     =   require('express')();
var path    = require('path');
app.set('view engine','ejs');
app.set('views', './app/views'); 
module.exports=app;