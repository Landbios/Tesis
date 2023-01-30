/*

register.html validations

*/

const regist_name = document.getElementById('regist_name');
const regist_lastname = document.getElementById('regist_lastname');
const regist_user = document.getElementById('regist_user');
const regist_tlf = document.getElementById('regist_tlf');
const regist_mail = document.getElementById('regist_mail');
const regist_birth = document.getElementById('regist_birth');
const regist_cedula = document.getElementById('regist_cedula');

//gender radio input array
const gender_input = document.getElementById('.gender_input');

const regist_password = document.getElementById('regist_password');
const regist_address = document.getElementById('regist_address');
const regist_sector = document.getElementById('regist_sector');


// function for name and lastname
const names = (value, el) => {
    console.log(value.length);
    warning = document.querySelector(`#${el}`);
    for (let i = 0; i < value.length; i++) {
        switch (value[i]) {
            case '0':
                warning.innerHTML = "no se admiten numeros en los nombres y apellidos";
                warning.style.color = "red";
                warning.style.fontSize = "10px";
                return;
            case '1':
                warning.innerHTML = "no se admiten numeros en los nombres y apellidos";
                warning.style.color = "red";
                warning.style.fontSize = "10px";
                return;
            case '2':
                warning.innerHTML = "no se admiten numeros en los nombres y apellidos";
                warning.style.color = "red";
                warning.style.fontSize = "10px";
                return;
            case '3':
                warning.innerHTML = "no se admiten numeros en los nombres y apellidos";
                warning.style.color = "red";
                warning.style.fontSize = "10px";
                return;
            case '4':
                warning.innerHTML = "no se admiten numeros en los nombres y apellidos";
                warning.style.color = "red";
                warning.style.fontSize = "10px";
                return;
            case '5':
                warning.innerHTML = "no se admiten numeros en los nombres y apellidos";
                warning.style.color = "red";
                warning.style.fontSize = "10px";
                return;
            case '6':
                warning.innerHTML = "no se admiten numeros en los nombres y apellidos";
                warning.style.color = "red";
                warning.style.fontSize = "10px";
                return;
            case '7':
                warning.innerHTML = "no se admiten numeros en los nombres y apellidos";
                warning.style.color = "red";
                warning.style.fontSize = "10px";
                return;
            case '8':
                warning.innerHTML = "no se admiten numeros en los nombres y apellidos";
                warning.style.color = "red";
                warning.style.fontSize = "10px";
                return;
            case '9':
                warning.innerHTML = "no se admiten numeros en los nombres y apellidos";
                warning.style.color = "red";
                warning.style.fontSize = "10px";
                return;
            default:
                warning.innerHTML = "";
        }
    }

}

regist_name.addEventListener('input', (e) => {

    // names(e.target.value, "name_warning");
    e.target.value = e.target.value.replace(/[0-9!"$#%&/=()¿?\\¨{}\[\]:;,\^`-]/g, "");

});

regist_lastname.addEventListener('input', (e) => {
    // names(e.target.value, "lastname_warning");
    e.target.value = e.target.value.replace(/[0-9!"$#%&/=()¿?\\¨{}\[\]:;,\^`-]/g, "");
});

regist_user.addEventListener('input', (e) => {
    let value = e.target.value;
    let filteredValue = value.replace(/[!"$#%&/=()¿?\\¨{}\[\]:;,\^`-]/g, "");
    e.target.value = filteredValue;
    const warning = document.querySelector('#user_warning');
    if (e.target.value.length > 16 || e.target.value.length < 6) {
        warning.innerHTML = "El nombre de usuario no puede ser inferior a 6 caracteres o superior a 16 caracteres";
        warning.style.fontSize = "10px";
        warning.style.color = "red";
        return;
    }
    warning.innerHTML = "";



});

regist_tlf.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/[a-zA-Z!"$#%&/=()¿?\\¨{}\[\]:;,\^`-]/g, "");
    return;
});

const allowedAge = (age) => {
    const time = new Date();
    const currentYear = time.getFullYear();
    return currentYear - age;
};

regist_birth.max = allowedAge(13) + "-01-01";


regist_mail.addEventListener('input', (e) => {
    // let value = e.target.value;
    // let filteredValue = value.replace(/[!"$#%&/=()¿?\\¨{}\[\]:;,\^`-]/g, "");
    // e.target.value = filteredValue;
    e.target.value = e.target.value.replace(/[!"$#%&/=()¿?\\¨{}\[\]:;,\^`-]/g, "");
    return;
});

regist_cedula.addEventListener('input', (e) => {
    // let value = e.target.value;
    // let filteredValue = value.replace(/[a-zA-Zñ]/g, "");
    // e.target.value = filteredValue;
    const warning = document.querySelector('#cedula_warning');
    if (e.target.value.length > 8) {
        warning.innerHTML = "La cedula no puede contener más de 8 caracteres";
        warning.style.color = "red";
        warning.style.fontSize = "10px";
        return;
    }
    warning.innerHTML = "";
    e.target.value = e.target.value.replace(/[a-zA-Zñ]/g, "");
    return;

});

regist_password.addEventListener('input', (e) => {
    const warning = document.querySelector("#password_warning");
    if (e.target.value.length < 8 || e.target.value.length > 32) {
        warning.innerHTML = "La contraseña no puede ser menor a 8 o mayor a 32 caracteres";
        warning.style.fontSize = "10px";
        warning.style.color = "red";
        return;
    }
    warning.innerHTML = "";
});
/*



*/