const Settings = require('./settings');

class SettingsResolver {

    getHttpPort() {
        return this.getHerokuHttpPort() || Settings.httpPort;
    }

    getHerokuHttpPort() {
        return process.env.PORT;
    }
}

module.exports = SettingsResolver;
