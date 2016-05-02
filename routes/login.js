var express = require('express');
var login = express.Router();
var passport = require('passport');

login.get('/', function(req, res, next){
    res.render('login', { title: 'myExpress', user: req.user });
});

login.post('/',
    passport.authenticate('local', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/butled');
    });

module.exports = login;
