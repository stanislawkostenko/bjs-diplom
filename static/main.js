class Profile {

    constructor(name, surname, country, birth) {
        this.name = name;
        this.surname = surname;
        this.country = country;

        birth = new Date().getFullYear();
        const age = new Date().getFullYear() - birth;
        this.age = age;
    }

    addNewUser() {

    }

    authorization() {

    }

    addMoney() {

    }

    convertingMoney() {

    }

    sendMoney() {

    }

    returnExchangeRate() {

    }

}

const sguclicky = new Profile('Stanislaw', 'Guslicky', 'Russia', (1992, 0, 4));
console.log(sguclicky);
