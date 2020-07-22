'use strict';

var express = require('express'),
    app2 = express();

app2.set('views', 'views');
app2.set('view engine', 'pug');

app2.get('/', function(req, res) {
    res.render('home', {
  });
});

app2.listen(8070);
module.exports.getApp = app2;
#Test comment.
