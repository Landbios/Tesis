const username = location.href.replace("http://localhost:8081/usuario/", "");
const profileImagePath = `/media/profilemedia/${username}_profimage.jpg`;

fetch(`http://localhost:8081/${profileImagePath}`)
    .then((response) => response.status)
    .then((data) => {
        const profileImageElement = document.querySelector(".profimage");
        if (data !== 200) {
            profileImageElement.src = `/media/profilemedia/_profimage.jpg`;
            return;
        }
        profileImageElement.src = profileImagePath;
        return;
    });

const genderTo1Char = (char) => {
    if (char === 'm') return "Hombre";
    if (char === 'f') return "Mujer";
    return "Indefinido";
};

fetch(`http://localhost:8081/usuario/${username}`, { method: "POST" })
    .then((response) => response.json())
    .then((userInformation) => {

        const profileName = document.querySelector(".profilename");
        const profileUsername = document.querySelector(".username");
        const profilemail = document.querySelector(".profilemail");
        const profileRealName = document.querySelector(".profile-real-name");
        const profileCedula = document.querySelector(".profile-cedula");
        const profileLastName = document.querySelector(".profile-lastname");
        const profileTlf = document.querySelector(".profile-tlf");
        const profileGender = document.querySelector(".profile-gender");
        const profileAge = document.querySelector(".profile-age");
        const profileAddress = document.querySelector(".profile-address");
        const profileParroquia = document.querySelector(".profile-parroquia");

        //update user info button
        const btnActualizar = document.querySelector(".actualizar");

        profileCedula.value = userInformation.cedula;
        profileName.innerHTML = userInformation.usuario;
        profilemail.innerHTML = userInformation.email;
        profileRealName.value = userInformation.nombre;
        profileLastName.value = userInformation.apellido;
        profileTlf.value = userInformation.telefono;
        profileGender.innerHTML = genderTo1Char(userInformation.genero);
        profileAge.value = userInformation.fecha_nacimiento.replace("T04:00:00.000Z", "");
        profileParroquia.value = userInformation.parroquia;
        profileAddress.value = userInformation.sector;


        btnActualizar.addEventListener("click", (e) => {

            const actualProfileName = profileName.innerHTML.trim().replace("<br>", "");
            const actualProfileMail = profilemail.innerHTML.trim().replace("<br>", "");
            const emailInput = document.createElement("input");
            emailInput.type = "email";
            emailInput.classList.add("profilemail");
            profilemail.parentElement.replaceChild(emailInput, profilemail);
            emailInput.value = profilemail.innerHTML.trim().replace("<br>", "");
            emailInput.maxLength = 320;
            emailInput.addEventListener("input", (e) => {
                console.log("asdasd");
                e.target.value = e.target.value.replace(/[!"*°|¬$#%&/=()¿?\\¨{}\[\]:'´;,\^`-]/g, "");


            });

            profileRealName.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[0-9!"$*#%|¬°&/=()¿?\\¨{}\[\]:'.´;,\^`-]/g, "");
            });

            profileLastName.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[0-9!"$*#%|¬°&/=()¿?\\¨{}\[\].:'´;,\^`-]/g, "");
            });

            profileTlf.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[a-zA-Z!"$*#%|¬°&/=()¿?\\¨{}\[\]:.'´;,\^`-]/g, "");
            });

            profileCedula.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[a-zA-Z!"$*#%|¬°&/=()¿?\\¨{}\[\]:'´.;,\^`-]/g, "");
            });

            profileParroquia.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[a-zA-Z!"$*#%|¬°&/=()¿?\\¨{}\[\]:'´;\^`-]/g, "");
            });

            profileAddress.addEventListener("input", (e) => {
                e.target.value = e.target.value.replace(/[!"$*#%|¬°&/=()¿?\\¨{}\[\]:'´;\^`-]/g, "");
            });

            const actualCedula = parseInt(profileCedula.value);
            // profileName.contentEditable = true;
            // profileName.style.backgroundColor = "white";

            profilemail.contentEditable = true;
            profilemail.style.backgroundColor = "white";

            profileCedula.disabled = false;
            profileRealName.disabled = false;
            profileLastName.disabled = false;
            profileTlf.disabled = false;
            profileAge.disabled = false;
            profileAge.min = "1903-12-31";
            const date = new Date();
            const actualYear = date.getFullYear();
            const allowedMaxYear = actualYear - 13;
            profileAge.max = `${allowedMaxYear}-01-01`;
            profileParroquia.disabled = false;
            profileAddress.disabled = false;

            const genderCheckbox = document.createElement("select");
            genderCheckbox.innerHTML = `
                <option value='m'>Hombre</option>
                <option value='f'>Mujer</option>
                <option value='i'>Indefinido</option>
            `;
            genderCheckbox.classList.add("genderInput");

            profileGender.parentElement.replaceChild(genderCheckbox, profileGender);

            const acceptButton = document.createElement("button");
            acceptButton.innerHTML = "Aceptar Cambios";
            acceptButton.classList.add("btn", "btn-outline-dark", "btn-hero");
            e.target.parentElement.appendChild(acceptButton);

            acceptButton.addEventListener("click", (e) => {
                let updateIsAcceptable = true;
                // fetch(`http://localhost:8081/usuario/${profileName.innerHTML.trim().replace("<br>", "")}`, { method: "POST" })
                //     .then((response) => response.json())
                //     .then((user) => {
                //         if (user.usuario === profileName.innerHTML.trim().replace("<br>", "")) {
                //             if (user.usuario !== actualProfileName) {
                //                 alert("El Usuario ya existe");
                //                 updateIsAcceptable = false;
                //                 return;
                //             }
                //             updateIsAcceptable = true;
                //         }
                //     })
                //     .catch((err) => console.log("Error en los datos del fetch"));

                fetch(`http://localhost:8081/usuario/${profilemail.innerHTML.trim()}`, { method: "POST" })
                    .then((response) => response.json())
                    .then((user) => {
                        if (user.email === profilemail.innerHTML.trim().replace("<br>", "")) {
                            if (user.email !== actualProfileMail) {
                                alert("El correo ya esta en uso");
                                updateIsAcceptable = false;
                                return;
                            }
                            updateIsAcceptable = true;
                        }
                    })
                    .catch((err) => console.log(err));

                fetch(`http://localhost:8081/usuario/${profileCedula.value}`, { method: "POST" })
                    .then((response) => response.json())
                    .then((user) => {
                        if (user.cedula === parseInt(profileCedula.value)) {
                            if (user.cedula !== actualCedula) {
                                alert("La cedula ya esta en uso");
                                updateIsAcceptable = false;
                                return;
                            }
                            updateIsAcceptable = true;
                        }
                    })
                    .catch((err) => console.log(err));

                const newCedula = profileCedula.value;
                const newUsername = profileName.innerHTML.trim();
                const newEmail = emailInput.value;
                const newRealName = profileRealName.value;
                const newLastName = profileLastName.value;
                const newTlf = profileTlf.value;
                const newGender = document.querySelector(".genderInput").value;
                const newAge = profileAge.value.replace("T04:00:00.000Z", "");
                const newAddress = profileAddress.value;
                const newParroquia = profileParroquia.value;
                const dataObject = {
                    cedula: newCedula,
                    usuario: newUsername,
                    email: newEmail.replace("<br>", ""),
                    nombre: newRealName,
                    apellido: newLastName,
                    telefono: newTlf,
                    genero: newGender,
                    fecha_nacimiento: newAge,
                    parroquia: newParroquia,
                    sector: newAddress
                };

                const fetchOptions = {
                    method: "POST",
                    headers: {
                        "content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(dataObject)
                };
                if (!updateIsAcceptable) {
                    alert("Introduzca valores pertinentes a los campos");
                    return;
                }
                fetch(`http://localhost:8081/usuario/update/${actualProfileName}`, fetchOptions)
                    .then((response) => response.json())
                    .then((data) => {
                        if (data) {
                            profileCedula.disabled = true;
                            profileRealName.disabled = true;
                            profileLastName.disabled = true;
                            profileTlf.disabled = true;
                            profileAge.disabled = true;
                            profileParroquia.disabled = true;
                            profileAddress.disabled = true;
                            profilemail.contentEditable = false;
                            location.reload()
                        };
                    })
                    .catch((err) => console.log(err));
            });

            const cancelButton = document.createElement("button");
            cancelButton.innerHTML = "Cancelar Modificación";
            cancelButton.classList = "btn", "btn-outline-dark";
            cancelButton.addEventListener("click", () => location.reload());
            e.target.parentElement.appendChild(cancelButton);

            e.target.remove();

        });

        if (userInformation.usuario !== profileUsername.innerHTML.trim()) {
            btnActualizar.remove();
            profilemail.remove();
        }
    });