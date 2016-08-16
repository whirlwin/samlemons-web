const crypto = require('crypto');
const express = require('express');
const expressSession = require('express-session');

const VIEW_ENGINE = 'pug';
const ASSETS_DIRECTORY = 'assets';

class ExpressConfig {

    configure() {
        const app = express();
        app.use(this.getSeededExpressSession());
        app.use(express.static(ASSETS_DIRECTORY));
        app.set('view engine', VIEW_ENGINE);
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
