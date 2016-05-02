var express = require('express');
var butled = express.Router();

butled.get('/', require('connect-ensure-login').ensureLoggedIn(),
    function(req, res, next){
        res.render('butled', { title: 'Secret', user: req.user });
});

module.exports = butled;
