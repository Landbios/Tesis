/*

register.html validations

*/

if (location.href === "http://localhost:8081/signUp") {
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
    const password_confirm = document.getElementById("confirm_password");
    const regist_address = document.getElementById('regist_address');
    const regist_sector = document.getElementById('regist_sector');


    // function for name and lastname
    const names = (value, el) => {
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
        fetch(`http://localhost:8081/usuario/${e.target.value}`, { method: 'POST' })
            .then((resolve) => {
                return resolve.json();
            })
            .then((data) => {
                if (typeof data.usuario === "string") {
                    warning.innerHTML = "El nombre de usuario ya está en uso";
                }
            })
            .catch((reject) => {
                console.log(reject);
            });




    });

    regist_tlf.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[a-zA-Z!¡._°|¬"$#%&/\*\+=()¿?\\¨{}\[\]:;,\^`-]/g, "");
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
        const mail_warning = document.querySelector("#mail_warning");
        fetch(`http://localhost:8081/usuario/${e.target.value}`, { method: 'POST' })
            .then((resolve) => {
                return resolve.json();
            })
            .then((data) => {
                if (typeof data.email === "string") {
                    mail_warning.innerHTML = "El correo ya está en uso";
                    mail_warning.style.color = "red";
                    mail_warning.style.fontSize = "10px";
                }
            })
            .catch((reject) => {
                mail_warning.innerHTML = "";
                console.log(reject);
            });
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
        fetch(`http://localhost:8081/usuario/${e.target.value}`, { method: 'POST' })
            .then((resolve) => {
                return resolve.json();
            })
            .then((data) => {
                if (typeof data.cedula === 'number') {
                    warning.innerHTML = "Una cuenta ya está registrada con esta cédula";
                    warning.style.color = "red";
                    warning.style.fontSize = "10px";
                }
            })
            .catch((reject) => {
                console.log(reject);
            });
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

    password_confirm.addEventListener('input', (e) => {
        const warning = document.querySelector("#password_warning");
        if (e.target.value !== regist_password.value) {
            warning.innerHTML = "Las contraseñas no concuerdan"
            warning.style.color = "red";
            warning.style.fontSize = "10px";
        }
        else {
            warning.innerHTML = "";
        }
    });
}
/*

animal_regist.html validations

*/
if (location.href === "http://localhost:8081/animalRegister") {
    const cookies = document.cookie;

    const user = document.getElementById("usuario");
    const animalName = document.getElementById("animal_name");
    const descripcion = document.getElementById("regist_user");
    const raza = document.getElementById("animal_race");
    const regist_age = document.getElementById("regist_age");
    user.value = cookies.replace(/user=/g, "");

    regist_age.addEventListener("input", (e) => {
        const filteredValue = e.target.value.replace(/[a-zA-Z!¡._°|¬"$#%&/\*\+=()¿?\\¨{}\[\]:;,\^`-]/gi, "");
        e.target.value = filteredValue;
    });

    user.addEventListener('input', (e) => {
        user.value = cookies.replace(/user=/g, "");
    });

    user.addEventListener('change', (e) => {
        user.value = cookies.replace(/user=/g, "");
    });

    const animal_regist_form = document.getElementById("animal_regist_form");
    /*
     * When form submitted animal registered value will 
     * be that of the one stored on cookie; if cookie has 
     * more than 2 values then it will fail or store something erroneous*/
    animal_regist_form.addEventListener('submit', (e) => {
        user.value = cookies.replace(/user=/g, "");
    });

    animalName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[0-9!¡._°|¬"$#%&/\*\+=()¿?\\¨{}\[\]:;,\^`-]/g, "");
    });

    descripcion.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[_\[\]{}¨\*\+~=$#<>]/g, "");
    });

    raza.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[0-9!¡._°|¬"$#%&/\*\+=()¿?\\¨{}\[\]:;,\^`-]/g, "");
    });
}

if (location.href === "http://localhost:8081/recover?step=0") {

    const btnSubmit = document.getElementById("btn_submit");
    btnSubmit.disabled = true;

    regist_mail.addEventListener('input', (e) => {

        e.target.value = e.target.value.replace(/[!"$#%&/=()¿?\\¨{}\[\]:;,\^`-]/g, "");

        const mail_warning = document.querySelector("#mail_warning");

        mail_warning.style.color = "red";
        mail_warning.style.fontSize = "10px";

        fetch(`http://localhost:8081/usuario/${e.target.value}`, { method: 'POST' })
            .then((resolve) => {
                return resolve.json();
            })
            .then(() => {
                mail_warning.innerHTML = "";
                btnSubmit.disabled = false;

            })
            .catch(() => {
                mail_warning.innerHTML = "El correo no existe";
                btnSubmit.disabled = true;

            });

        return;
    });
}

const queries = new URLSearchParams(location.search);

if (queries.get("mail") !== "") {
    
    const mailInput = document.querySelector(".email");
    mailInput.value = queries.get("mail");
    mailInput.readOnly = true;
    mailInput.style.display = "none";

    const regist_password = document.getElementById("regist_password");

    const btn_submit = document.getElementById("btn_submit");
    btn_submit.disabled = true;

    regist_password.addEventListener('input', (e) => {
        const warning = document.querySelector("#password_warning");
        if (e.target.value.length < 8 || e.target.value.length > 32) {
            warning.innerHTML = "La contraseña no puede ser menor a 8 o mayor a 32 caracteres";
            warning.style.fontSize = "10px";
            warning.style.color = "red";
            btn_submit.disabled = true;
            return;
        }
        warning.innerHTML = "";
        btn_submit.disabled = false;
    });

}