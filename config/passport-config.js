const passport = require('passport');
const passportFacebook = require('passport-facebook');

const FacebookStrategy = passportFacebook.Strategy;

class PassportConfig {

    configure() {
        facebookStrategy = new FacebookStrategy({
            clientID:
        });
        passport.use(new FacebookStrategy({

        }));
    }
}

module.exports = PassportConfig;