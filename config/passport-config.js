const HttpConfig = require('./http-config');
const Optional = require('optional-js');
const passport = require('passport');
const passportFacebook = require('passport-facebook');
const url = require('url');
const Settings = require('../settings');

const FacebookStrategy = passportFacebook.Strategy;

class PassportConfig {

    constructor(opts = {}) {
        this.httpConfig = opts.httpConfig || new HttpConfig();
    }

    configure(app) {
        const facebookCredentials = {
            clientID: this.getFacebookAppId(),
            clientSecret: this.getFacebookAppSecret(),
            callbackURL: this.getFacebookCallbackHref()
        };
        passport.use(new FacebookStrategy(facebookCredentials, this.verifyUser));

        app.use(passport.initialize());
        app.use(passport.session());
    }

    getScopes() {
        return Settings.facebook.scope;
    }

    verifyUser(accessToken, refreshToken, profile, done) {
        console.log('access token: ' + accessToken);
    }

    getFacebookAppId() {
        return process.env.FACEBOOK_APP_ID || Settings.facebook.appId;
    }

    getFacebookAppSecret() {
        return Optional.ofNullable(process.env.FACEBOOK_CLIENT_SECRET)
            .orElseThrow(() => new Error('Could not get env variable FACEBOOK_CLIENT_SECRET'));
    }

    getFacebookCallbackPath() {
        return '/auth/facebook/login/callback';
    }

    getFacebookCallbackHref() {
        if (process.env.NODE_ENV === 'production') {
            return url.parse(`http://${Settings.domainName}`).href;
        } else {
            const rawUrl =`http://localhost:${this.httpConfig.getHttpPort()}${this.getFacebookCallbackPath()}`;
            return url.parse(rawUrl).href;
        }
    }
}

module.exports = PassportConfig;