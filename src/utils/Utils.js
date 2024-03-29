class Utils {
    //utility function to transform the whole word of gender to one 
    //char
    //i.e: femenino => f; masculino => m
    static genderTo1Char = (fullGenderWord) => {
        if (fullGenderWord === 'masculino') return 'm';
        if (fullGenderWord === 'femenino') return 'f';
        if (fullGenderWord === 'indefinido') return 'i';
    }

    //utility function to set 1 if category is true or 0 if otherwise
    static stringBoolToInt = (state) => {
        if (state === 'true') return 1;
        if (state === 'false') return 0;
    }

    static specieTo1Char = (longSpecieName) => {
        switch (longSpecieName) {
            case 'gato':
                return 'g';
            case 'perro':
                return 'p';
            case 'conejo':
                return 'c';
            case 'hamster':
                return 'h';
        }
    }

    static checkUserInfo = (info) => {
        let isThereLetters = info.match(/[a-zA-Zñ]/g);

        if (isThereLetters === null) {
            return "cedula"
        }

        for (let i = 0; i < info.length; i++) {
            if (info[i] === "@") return "email";

        }
        return "user"
    }
}

module.exports = Utils;