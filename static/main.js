class Profile {

    constructor(object) {
        this.username = object.username;
        this.name = { firstName: object.firstName, lastName: object.lastName };
        this.password = object.password;
    }

    addNewUser(callback) {
		    return ApiConnector.createUser(
            {
						    username: this.username,
						    name: this.name,
						    password: this.password
				    },
				    (err, data) => {
						    console.log(`Creating user ${this.username}`);
						    callback(err, data);
				    }
		    );
    }

    authorization({ username, password }, callback) {
        return ApiConnector.performLogin(
            (err, data) => {
                console.log(`Authorizing user ${this.username}`);
                callback(err, data);
            }
        );
    }

    addMoney({ currency, amount }, callback) {
        return ApiConnector.addMoney({ currency, amount }, (err, data) => {
            console.log(`Adding ${amount} of ${currency} to ${this.username}`);
            callback(err, data);
        });
    }

    convertingMoney({ fromCurrency, targetCurrency, targetAmount }, callback) {
        return ApiConnector.convertMoney({fromCurrency, targetCurrency, targetAmount}, (err, data) => {
            console.log(`Converting ${fromCurrency} to ${targetAmount} ${targetCurrency}`);
            callback(err, data);
        });
    }

    sendMoney({ to, amount }, callback) {
        return ApiConnector.transferMoney({ to, amount}, (err, data) => {
            console.log(`Transfering ${amount} of Netcoins to ${to}`);
            callback(err, data);
        });
    }

    getStocks(callback) {
        return ApiConnector.getStocks((err, data) => {
            console.log(`Getting stocks info`);
            callback(err, data);
        });
    }

}

const sguslicky = new Profile({
  username: 'sguclicky',
  name: { firstName: 'stanislaw', lastName: 'guslicky' },
  password: 'f5ff65fw3e23e',
});
console.log(sguslicky);
