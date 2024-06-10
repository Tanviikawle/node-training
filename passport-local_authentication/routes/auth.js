let express = require('express');
let passport = require('passport');
let LocalStrategy = require('passport-local');
let crypto = require('crypto');

let router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;

