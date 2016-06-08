const express = require('express');

class ExpressConfig {

    configure() {
        const app = express();
        return app;
    }
}

module.exports = ExpressConfig;
