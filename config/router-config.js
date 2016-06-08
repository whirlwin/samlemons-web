const indexController = require('../server/index-controller');

class RouterConfig {

    configure(app) {
        app.use(indexController);
    }
}

module.exports = RouterConfig;