const isNeutered = (state) => {
    if (state === 'true') return 1;
    if (state === 'false') return 0;
};

module.exports = isNeutered;