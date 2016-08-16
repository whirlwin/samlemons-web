const express = require('express');
const passport = require('passport');
const Settings = require('../settings');

const router  = express.Router();
const AUTH_STRATEGY = 'facebook';
const loginCallbackRedirectPaths = {
    successRedirect: '/',
    failureRedirect: '/innlogging'
};

router.get('/auth/facebook/login', passport.authenticate(AUTH_STRATEGY, Settings.facebook.scope));

router.get(Settings.facebook.callbackPath, passport.authenticate(AUTH_STRATEGY, loginCallbackRedirectPaths));

module.exports = router;