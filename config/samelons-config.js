const ExpressConfig = require('./express-config');
const PassportConfig = require('./auth/passport-config');
const RouterConfig = require('./router-config');
const WinstonConfig = require('./winston-config');

class SamlemonsConfig {

    constructor() {
        this.expressConfig = new ExpressConfig();
        this.passportConfig = new PassportConfig();
        this.winstonConfig = new WinstonConfig();
        this.routerConfig = new RouterConfig();
    }

    configure() {
        this.app = this.expressConfig.configure();
        this.passportConfig = this.passportConfig.configure(this.app);
        this.winston = this.winstonConfig.configure();
        this.routerConfig.configure(this.app);
        return { app: this.app, winston: this.winston };
    }
}

module.exports = SamlemonsConfig;