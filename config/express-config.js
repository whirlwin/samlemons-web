const crypto = require('crypto');
const express = require('express');
const expressSession = require('express-session');

class ExpressConfig {

    configure() {
        const app = express();
        app.use(this.getSeededExpressSession());
        app.set('view engine', 'pug');
        return app;
    }

    getSeededExpressSession() {
        return expressSession({
            secret: this.getSessionSecret(),
            resave: true,
            saveUninitialized: true
        });
    }

    getSessionSecret() {
        return process.env.SESSION_SECRET || crypto.randomBytes(64).toString('hex');
    }
}

module.exports = ExpressConfig;
