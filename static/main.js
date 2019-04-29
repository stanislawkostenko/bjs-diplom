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
        username = this.username;
        password = this.password;
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

}

function getStocks(callback) {
    return ApiConnector.getStocks((err, data) => {
        console.log(`Getting stocks info`);
        callback(err, data);
    });
}

getStocks();



function main() {

    const SGuslicky = new Profile({
        username: 'sguclicky',
        name: { firstName: 'Stanislaw', lastName: 'Guslicky' },
        password: 'f5ff65fw3e23e',
    });

    const STGfilat2023 = new Profile({
        username: 'STGfilat2023',
        name: { firstName: 'Roman', lastName: 'Filatov' },
        password: '676vsfsd98nd3',
    });



    SGuslicky.addNewUser({ username: 'sguclicky', name: { firstName: 'Stanislaw',
    lastName: 'Guslicky' }, password: 'f5ff65fw3e23e' }, (err, data) => {
        if (err) {
            console.error('Error during creating new user!');
        } else {
            console.log(`${this.username} is created!`)
        }
    });

    SGuslicky.authorization({username: 'sguclicky', password: 'f5ff65fw3e23e'}, (err, data) => {
        if (err) {
            console.error('Error during authorizating! Wrong username or password!')
        } else {
            console.log(`${this.username} is authorized!`)
        }
    });

    SGuslicky.addMoney({ currency: 'EUR', amount: 500000 }, (err, data) => {
        if (err) {
            console.error(`Error during adding money to ${this.username}`);
        } else {
            console.log(`Added ${this.amount} ${this.currency} to ${this.username}`);
        }
    });

    SGuslicky.convertingMoney({ fromCurrency: 'RUB', targetCurrency: 'NETCOINS', targetAmount: 500000 },
    (err, data) => {
        if (err) {
            console.error(`Error during converting ${fromCurrency} to ${targetCurrency}!`);
        } else {
            console.log(`Converted to coins ${SGuslicky}`);
            /* Я НЕ СОВСЕМ ПОНЯЛ ПО СКРИНШОТУ, ЧТО ДОЛЖНО БЫТЬ ПОСЛЕ COINS */
        }
    });

    SGuslicky.sendMoney({ to: STGfilat2023, amount: 36000}, (err, data) => {
        if (err) {
            console.error(`Error during sending money to ${to}!`);
        } else {
            console.log(`${STGfilat2023.username} has got ${amount} ${this.targetCurrency}`);
        }
    });

}

main();
