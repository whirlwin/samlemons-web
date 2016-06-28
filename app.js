const HttpConfig = require('./config/http-config');
const SamlemonsConfig = require('./config/samelons-config');

class App {

    constructor() {
        this.samlemonsConfig = new SamlemonsConfig();
        this.httpConfig = new HttpConfig();
    }

    configure() {
        const config = this.samlemonsConfig.configure();
        this.app = config.app;
        this.winston = config.winston;
    }

    start() {
        const httpPort = this.httpConfig.getHttpPort();
        this.app.listen(httpPort, () => this.winston.info(`App started on port ${httpPort}`));
    }
}

module.exports = App;
