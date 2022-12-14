const checkFormData = (formDataArr) => {
    for (let i = 0; i < formDataArr.length; i++) {
        console.log(formDataArr[i]);
        if (typeof formDataArr[i] === 'undefined' || formDataArr[i] === '') {
            return false;
        } 
    };

    return true;
};

module.exports = checkFormData;