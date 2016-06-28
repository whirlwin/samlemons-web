const express = require('express');
const passport = require('passport');
const PassportConfig = require('../config/passport-config');

const router  = express.Router();
const passportConfig = new PassportConfig();
const AUTH_STRATEGY = 'facebook';
const loginCallbackRedirectPaths = {
    successRedirect: '/',
    failureRedirect: '/innlogging'
};

router.get('/auth/facebook/login', passport.authenticate(AUTH_STRATEGY, passportConfig.getScopes()));

router.get(passportConfig.getFacebookCallbackPath(), passport.authenticate(AUTH_STRATEGY, loginCallbackRedirectPaths));

module.exports = router;