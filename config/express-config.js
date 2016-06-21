const express = require('express');

class ExpressConfig {

    configure() {
        const app = express();
        app.set('view engine', 'pug');
        return app;
    }
}

module.exports = ExpressConfig;
