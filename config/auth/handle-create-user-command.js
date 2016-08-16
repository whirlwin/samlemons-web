const hystrix = require('hystrixjs');
const Settings = require('../../settings');

class HandleCreateUserCommand {

    constructor() {
        this.command = hystrix.commandFactory.getOrCreate('HandleCreateUserCommand')
            .timeout(1000)
            .run(this.makeRequest)
            .build();
    }

    makeRequest() {

        var p = new Promise((resolve, reject) => {

        });
        p.timeout = () => console.log('fi fa fo');
        return p;
    }

    execute() {
        return this.command.execute();
    }
}

module.exports = HandleCreateUserCommand;