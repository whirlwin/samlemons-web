const SamlemonsConfig = require('./config/samelons-config');
const SettingsResolver = require('./settings/settings-resolver');

class App {

    constructor() {
        this.samlemonsConfig = new SamlemonsConfig();
        this.settingsResolver = new SettingsResolver();
    }

    configure() {
        const config = this.samlemonsConfig.configure();
        this.app = config.app;
        this.winston = config.winston;
    }

    start() {
        const httpPort = this.settingsResolver.getHttpPort();
        this.app.listen(httpPort, () => this.winston.info(`App started on port ${httpPort}`));
    }
}

module.exports = App;
