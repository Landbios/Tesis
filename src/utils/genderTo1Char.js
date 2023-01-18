const genderTo1Char = (fullGenderWord) => {
    if (fullGenderWord === 'masculino') return 'm';
    if (fullGenderWord === 'femenino') return 'f';
};

module.exports = genderTo1Char;