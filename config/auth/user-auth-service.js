const goodGuyHttp = require('good-guy-http');
const Settings = require('../../settings');

class UserAuthService {

    constructor() {
    }

    static handleCreateUser(accessToken, refreshToken, profile, done) {
        const req = goodGuyHttp({ timeout: 10000 });
        const futureResult = req.post(`${Settings.samlemonsApi.baseUrl}/user`, {
                    oauth: { accessToken, refreshToken },
                    profile
                }
        );
        return futureResult
                .then(res => done(null, res))
                .catch(done);
    }

}

module.exports = UserAuthService;