class Profile {

    // constructor(name, surname, country, birth) {
    //     this.name = name;
    //     this.surname = surname;
    //     this.country = country;
    //
    //     birth = new Date().getFullYear();
    //     const age = new Date().getFullYear() - birth;
    //     this.age = age;
    // }

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
            {
                username: this.username,
                password: this.password
            },
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
//
// const sguclicky = new Profile('Stanislaw', 'Guslicky', 'Russia');
// console.log(sguclicky);
