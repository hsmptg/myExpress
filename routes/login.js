var express = require('express');
var login = express.Router();

login.get('/', function(req, res, next){
  res.render('login', { title: 'myExpress' });
});

login.post('/',
//    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

module.exports = login;
