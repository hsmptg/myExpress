var express = require('express');
var login = express.Router();

/* GET users listing. */
login.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = login;
