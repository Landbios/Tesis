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
            adoptionLinkBtn.addEventListener("click", (e) => {
                const checkIfUserIsAlreadyAdoptingAnimalRoute = `http://localhost:8081/adoption?starter=${starter}&animalId=${id}&option=c`;
                fetch(checkIfUserIsAlreadyAdoptingAnimalRoute, { method: "POST" })
                    .then((response) => response.json())
                    .then((data) => {
                        const msg = document.querySelector(".msg");
                        if (!data.response) {
                            const requestRoute = `http://localhost:8081/adoption?starter=${starter}&animalId=${id}&option=a`;
                            
                            fetch(requestRoute, { method: "POST" })
                            
                            msg.innerHTML = "EXCELENTE! Solo debes ponerte en contacto ahora con el postulador; Revisa la sección de adopciones";
                        } else {

                            msg.style.color = "red";
                            msg.innerHTML = "Ya te encuentras en el proceso de adoptar a este animalito, ponte en contacto con el postulador";
                        }
                    });


            });
        } else {
            location.href = "/login";

        }
    });