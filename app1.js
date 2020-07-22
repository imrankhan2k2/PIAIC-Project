'use strict';

var express = require('express'),
    app1 = express();

app1.set('views', 'views');
app1.set('view engine', 'pug');

app1.get('/', function(req, res) {
    res.render('home', {
  });
});

app1.listen(8070);
module.exports.getApp = app1;
