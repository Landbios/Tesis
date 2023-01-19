class Utils {
    //utility function to transform the whole word of gender to one 
    //char
    //i.e: femenino => f; masculino => m
    static genderTo1Char = (fullGenderWord) => {
        if (fullGenderWord === 'masculino') return 'm';
        if (fullGenderWord === 'femenino') return 'f';
    }

    //utility function to set 1 if animal is neutered or 0 if otherwise
    static isNeutered = (state) => {
        if (state === 'true') return 1;
        if (state === 'false') return 0;
    };
}

module.exports = Utils;