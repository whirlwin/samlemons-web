const Settings = require('./settings');

class SettingsResolver {

    getHttpPort() {
        return this.getHerokuHttpPort() || Settings.httpPort;
    }

    getHerokuHttpPort() {
        return process.env.PORT;
    }

    getFacebookSettings() {
        return {
            appSecret: process.env.FACEBOOK_CLIENT_SECRET;
        }
    }
}

module.exports = SettingsResolver;
