const indexController = require('../server/index-controller');
const facebookLoginController = require('../server/facebook-login-controller');

class RouterConfig {

    configure(app) {
        app.use(indexController);
        app.use(facebookLoginController);
    }
}

module.exports = RouterConfig;