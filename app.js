const RouterConfig = require('./config/router-config');
const ExpressConfig = require('./config/express-config');
const SettingsResolver = require('./settings/settings-resolver');
const WinstonConfig = require('./config/winston-config');

class App {

    constructor() {
        this.expressConfig = new ExpressConfig();
        this.settingsResolver = new SettingsResolver();
        this.winstonConfig = new WinstonConfig();
        this.routerConfig = new RouterConfig();
    }

    configure() {
        this.app = this.expressConfig.configure();
        this.winston = this.winstonConfig.configure();
        this.routerConfig.configure(this.app);
    }

    start() {
        const httpPort = this.settingsResolver.getHttpPort();
        this.app.listen(httpPort, () => this.winston.info(`App started on port ${httpPort}`));
    }
}

module.exports = App;
