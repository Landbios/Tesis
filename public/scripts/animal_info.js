const id = location.href.replace("http://localhost:8081/animal/", "");

const getUsernameFromSingleCookie = (individualCookie) => {
    return individualCookie.replace(/user=/g, "");
}

fetch(`http://localhost:8081/animal/${id}`, { method: 'POST' })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const nombre = document.querySelector("#nombre");
        const propietario = document.querySelector("#propietario");
        const specie = document.querySelector("#especie");
        const raza = document.querySelector("#raza");
        const genero = document.querySelector("#genero");
        const es_vacunado = document.querySelector("#es_vacunado");
        const es_esterilizado = document.querySelector("#es_esterilizado");
        const edad = document.querySelector("#edad");
        const ubicacion = document.querySelector("#ubicacion");
        const descripcion = document.querySelector("#descripcion");
        const adoptionLinkBtn = document.getElementById("adoption-link");
        const modifyBtn = document.querySelector(".modify");
        const deleteBtn = document.querySelector(".delete");

        if (getUsernameFromSingleCookie(document.cookie) !== data.propietario) {
            modifyBtn.remove();
            deleteBtn.remove();
        } else {
            deleteBtn.addEventListener("click", () => {
                fetch(`http://localhost:8081/animal/delete/${id}`, {method:"POST"})
                setTimeout(() => location.href = `http://localhost:8081/animal`, 2000);
            });

            modifyBtn.addEventListener("click", () => {

                modifyBtn.style.display = "none";
                deleteBtn.style.display = "none";

                const acceptModifyBtn = document.createElement("button");
                acceptModifyBtn.classList.add(["btn", "btn-outline-dark"]);
                acceptModifyBtn.innerHTML = "Realizar Cambios";
                nombre.parentElement.appendChild(acceptModifyBtn);

                const createInputElement = (type, classes, el) => {
                    const element = document.createElement("input");
                    element.type = type;
                    element.classList.add(classes);

                    if (type === 'number') {
                        el.innerHTML = el.innerHTML.replace(/[a-zA-Z() ]/gi, "");
                        element.value = parseInt(el.innerHTML);

                        return element;
                    }

                    if (type === 'checkbox') {
                        if (el.innerHTML.toLowerCase() === 'no') {
                            element.checked = false;
                        }
                        else element.checked = true;
                        return element;
                    }

                    element.value = el.innerHTML;
                    return element;
                }

                const specieSelect = document.createElement("select");
                specieSelect.classList.add(["specie"]);
                specieSelect.innerHTML = `
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Hámster</option>
                    <option>Conejo</option>
                `;

                const genderSelect = document.createElement("select");
                genderSelect.classList.add(["gender"]);
                genderSelect.innerHTML = `
                    <option>Macho</option>
                    <option>Hembra</option>
                `;

                const ageTypeSelect = document.createElement("select");
                ageTypeSelect.classList.add(["age-type"]);
                ageTypeSelect.innerHTML = `
                    <option>Meses</option>
                    <option>Años</option>
                `;


                const descriptionTextArea = document.createElement("textarea");
                descriptionTextArea.classList.add(["descripcion"]);
                descriptionTextArea.innerHTML = descripcion.innerHTML;

                specie.parentElement.replaceChild(specieSelect, specie);

                nombre.parentElement.replaceChild(createInputElement("text", ["nombre"], nombre), nombre);

                raza.parentElement.replaceChild(createInputElement("text", ["raza"], raza), raza);

                edad.parentElement.append(ageTypeSelect);
                edad.parentElement.replaceChild(createInputElement("number", ["edad"], edad), edad);

                es_vacunado.parentElement.replaceChild(createInputElement(
                    "checkbox", ["vaccine"], es_vacunado
                ), es_vacunado);

                es_esterilizado.parentElement.replaceChild(createInputElement(
                    "checkbox", ["neuter"], es_esterilizado
                ), es_esterilizado);

                genero.parentElement.replaceChild(genderSelect, genero);



                descripcion.parentElement.replaceChild(descriptionTextArea, descripcion);

                acceptModifyBtn.addEventListener("click", () => {
                    const newSpecieValue = document.querySelector(".specie").value.toLowerCase();
                    const newNombreValue = document.querySelector(".nombre").value;
                    const newRazaValue = document.querySelector(".raza").value;
                    const newEdadValue = document.querySelector(".edad").value;
                    const newAgeTypeValue = document.querySelector(".age-type").value.toLowerCase();
                    const newVaccineValue = document.querySelector(".vaccine").checked;
                    const newNeuterValue = document.querySelector(".neuter").checked;
                    const newGenderValue = document.querySelector(".gender").value.toLowerCase();
                    const newDescripcionValue = document.querySelector(".descripcion").value;

                    const ageTypeTo1Char = (ageTypeFull) => {
                        return ageTypeFull !== 'años' ? 'm' : 'a';
                    }

                    const makeSpecieOneChar = (fullSpecie) => {
                        switch (fullSpecie) {
                            case 'gato':
                                return 'g';
                            case 'perro':
                                return 'p';
                            case 'conejo':
                                return 'c';
                            case 'hámster':
                                return 'h';
                            default:
                                throw new Error("Error convirtiendo el nombre completo en un solo caracter en la función makeSpecieOneChar");
                        }
                    };

                    const genderTo1Char = (genderFull) => {
                        return genderFull !== 'macho' ? 'h' : "m";
                    }

                    const updateObject = {
                        specie: makeSpecieOneChar(newSpecieValue),
                        name: newNombreValue,
                        raza: newRazaValue,
                        edad: newEdadValue,
                        ageType: ageTypeTo1Char(newAgeTypeValue),
                        vaccine: newVaccineValue,
                        neuter: newNeuterValue,
                        gender: genderTo1Char(newGenderValue),
                        descripcion: newDescripcionValue
                    };

                    const updateObjectJSON = JSON.stringify(updateObject);
                    const requestOptions = {
                        method: "POST",
                        body: updateObjectJSON,
                        headers: {
                            "content-type": "application/json; charset=UTF-8"
                        }
                    };

                    fetch(`http://localhost:8081/animal/update/${id}`, requestOptions)
                        .then((response) => {
                            if (response) {
                                location.reload();
                            }
                        }) 
                        .catch((reject) => {
                            alert("Error a la hora de actualizar:");
                        })
                });
            });
        }

        if (typeof data.msg !== 'undefined') {
            nombre.innerHTML = data.msg;
            return;
        }

        const makeSpecieFull = (shortSpecie) => {
            switch (shortSpecie) {
                case 'p':
                    return 'Perro';
                case 'g':
                    return 'Gato';
                case 'c':
                    return 'Conejo';
                case 'h':
                    return 'Hámster';
                default:
                    //error
                    return false
            }
        }
        nombre.innerHTML = data.nombre;
        propietario.innerHTML = data.propietario;
        specie.innerHTML = makeSpecieFull(data.especie);
        raza.innerHTML = data.raza;
        genero.innerHTML = data.genero === 'm' ? 'macho' : 'hembra';
        es_vacunado.innerHTML = data.es_vacunado === 0 ? 'no' : 'si';
        es_esterilizado.innerHTML = data.es_castrado === 0 ? 'no' : 'si';
        edad.innerHTML = data.edad + (data.tipo === 'a' ? " año(s)" : " mes(es)");
        descripcion.innerHTML = data.descripcion;
        fetch(`http://localhost:8081/usuario/${data.propietario}`, { method: 'POST' })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                ubicacion.innerHTML = data.sector;
            })
            .catch((err) => {
                console.log(err);
            });

        // for adoption
        const starter = getUsernameFromSingleCookie(document.cookie);
        if (starter !== "") {
            if (starter !== propietario.innerHTML) {
                adoptionLinkBtn.addEventListener("click", (e) => {
                    const checkIfUserIsAlreadyAdoptingAnimalRoute = `http://localhost:8081/adoption?starter=${starter}&animalId=${id}&option=c`;
                    fetch(checkIfUserIsAlreadyAdoptingAnimalRoute, { method: "POST" })
                        .then((response) => response.json())
                        .then((data) => {
                            const msg = document.querySelector(".msg");
                            if (!data.response) {
                                const requestRoute = `http://localhost:8081/adoption?starter=${starter}&animalId=${id}&option=a`;

                                fetch(requestRoute, { method: "POST" })
                                if (starter !== propietario.innerHTML) {
                                    msg.innerHTML = "EXCELENTE! Solo debes ponerte en contacto ahora con el postulador; Revisa la sección de adopciones";
                                    return;
                                }
                            } else {
                                msg.style.color = "red";
                                msg.innerHTML = "Ya te encuentras en el proceso de adoptar a este animalito, ponte en contacto con el postulador";
                            }
                        });
                });
            } else {
                adoptionLinkBtn.remove();
            }


        } else {
            location.href = "/login";

        }
    });