class Profile {

    constructor({ username, name: { firstName, lastName }, password }) {
        this.username = username;
        this.name = { firstName, lastName };
        this.password = password;
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

    authorization(callback) {
		    return ApiConnector.performLogin({username: this.username, password: this.password},
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
        callback(err, data[99]);
    });
}

let stocksInfo;

getStocks((err, data) => {
    if (err) {
        console.error('Error during getting stocks info');
    } else {
        stocksInfo = data;
        console.log(`Loading actual stocks info...`);
        console.log(data);
    }
});



function main() {

    const STGfilat2023 = new Profile({
        username: 'STGfilat2023',
        name: { firstName: 'Roman', lastName: 'Filatov' },
        password: '676vsfsd98nd3',
    });

    const SGuslicky = new Profile({
        username: 'sguclicky',
        name: { firstName: 'Stanislaw', lastName: 'Guslicky' },
        password: 'f5ff65fw3e23e',
    });



    STGfilat2023.addNewUser((err, data) => {
        if (err) {
            console.error('Error during creating new user!');
        } else {
            console.log(`STGfilat2023 is created!`)
        }
        STGfilat2023.authorization((err, data) => {
            if (err) {
                console.error('Error during authorizating! Wrong username or password!')
            } else {
                console.log(`STGfilat2023 is authorized!`)
            }
        });
    });

    SGuslicky.addNewUser((err, data) => {
        if (err) {
            console.error('Error during creating new user!');
        } else {
            console.log(`sguclicky is created!`)
        }
        SGuslicky.authorization((err, data) => {
            if (err) {
                console.error('Error during authorizating! Wrong username or password!')
            } else {
                console.log(`sguclicky is authorized!`)
            }
            SGuslicky.addMoney({ currency: 'EUR', amount: 500000 }, (err, data) => {
                if (err) {
                    console.error(`Error during adding money to sguslicky`);
                } else {
                    console.log(`Added 500000 of EUR to sguslicky`);
                }
                SGuslicky.convertingMoney({ fromCurrency: 'EUR', targetCurrency: 'NETCOIN', targetAmount: 36000 },
                (err, data) => {
                    if (err) {
                        console.error(`Error during converting EUR to NETCOIN!`);
                    } else {
                        let convertSum = 500000 * stocksInfo.EUR_NETCOIN;
                        console.log(`Converted to coins`, data);
                    }
                    SGuslicky.sendMoney({ to: 'STGfilat2023', amount: 36000 }, (err, data) => {
                        if (err) {
                            console.error(`Error during sending money to ${this.to}!`);
                        } else {
                            console.log(`${STGfilat2023.username} has got 36000 NETCOINS`);
                        }
                    });
                });
            });
        });
    });

}

main();
