const getUsernameFromSingleCookie = (individualCookie) => {
    return individualCookie.replace(/user=/g, "");
};



const fillContainer = (option) => {
    return new Promise((resolve, reject) => {
        if (option !== 'g*') {
            const starter = getUsernameFromSingleCookie(document.cookie);
            const route = `http://localhost:8081/adoption?starter=${starter}&option=${option}`
            fetch(route, { method: "POST" })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const cardContainer = document.querySelector(".card-container");
                    cardContainer.innerHTML = "";
                    data.resolve.map((item) => {
                        cardContainer.innerHTML += `
                            <div class="col-md-3">
                            <div class="card">
    
                                <img class="card-img-top"
                                    src="https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    alt="">
                                <div class="card-body">
                                    <h4 class="owner-name">nombre</h4>
                                    <h4 class="owner-username">Nombre de usuario: usuario</h4>
                                    <h4 class="owner-tlf">xxxx-xxxxxxx</h4>
                                    <h4 class="owner-age"></h4>
                                    <h4 class="animal-name"></h4>
    
                                    <div class="col-md-6 buttons-container">
                                        <a href="/animal/${item.adoptado}" class="btn btn-lg btn-hero id">Ver más</a>
                                    </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                `
                    })
                    resolve(data.resolve);
                })
                .catch(() => {
                    reject(false);
                });
        } else {
            fetch(`http://localhost:8081/user/${getUsernameFromSingleCookie(document.cookie)}/animal`, { method: "POST" })
                .then((response) => response.json())
                .then((data) => {
                    const cardContainer = document.querySelector(".card-container");
                    cardContainer.innerHTML = "";
                    data.map((item) => {
                        cardContainer.innerHTML += `
                                     <div class="col-md-3">
                                     <div class="card">

                                         <img class="card-img-top"
                                             src="https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                             alt="">
                                         <div class="card-body">
                                             <h4 class="animal-name">${item.nombre}</h4>
                                             <h4 class="animal-status">Estado: ${item.es_adoptado === 1 ? "Adoptado" : "En adopción"}</h4>
                                             <div class="col-md-6 buttons-container">
                                         <a href="/animal/${item.id}" class="btn btn-lg btn-hero id">Ver más</a>
                                            </div>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                 `
                    });
                })
                .catch((err) => console.log(err));
        }

    });
}

const btnYourAnimals = document.querySelector("#on-adoption");
btnYourAnimals.addEventListener("click", () => {
    const title = document.querySelector(".title");

    title.innerHTML = "Tus animales que tienen interesados";
    fillContainer("ga")
        .then((response) => {
            const idsAnimal = Array.from(document.querySelectorAll(".id"));
            const namesAnimal = Array.from(document.querySelectorAll(".animal-name"));
            const interestedName = Array.from(document.querySelectorAll(".owner-name"));
            const ownerUsername = Array.from(document.querySelectorAll(".owner-username"));
            const ownerTlf = Array.from(document.querySelectorAll(".owner-tlf"));
            const ownerAge = Array.from(document.querySelectorAll(".owner-age"));

            const getAge = (date) => {
                const birthYear = parseInt(`${date[0]}${date[1]}${date[2]}${date[3]}`);
                const time = new Date();
                return time.getFullYear() - birthYear;
            }
            const clearDate = (date) => {
                let hasString = date.match("T04:00:00.000Z");
                if (hasString !== null) {
                    return date.replace("T04:00:00.000Z", "");
                }
                return date.replace("T04:30:00.000Z", "");
            }

            idsAnimal.map((item, i) => {
                const buttonsContainer = Array.from(document.querySelectorAll(".buttons-container"));
                const acceptAdoptionBtn = document.createElement("a");
                acceptAdoptionBtn.classList.add("btn", "btn-lg", "btn-hero", "accept-adoption");
                acceptAdoptionBtn.innerHTML = "Aceptar adopción";
                buttonsContainer[i].appendChild(acceptAdoptionBtn);
                fetch(`http://localhost:8081/animal/${item.href.replace("http://localhost:8081/animal/", "")}`,
                    { method: "POST" })
                    .then((response) => response.json())
                    .then((data) => {
                        namesAnimal[i].innerHTML = `Mascota: ${data.nombre}`;
                        const animalId = data.id;
                        fetch(`http://localhost:8081/usuario/${response[i].adoptante}`, { method: "POST" })
                            .then((response) => response.json())
                            .then((data) => {
                                interestedName[i].innerHTML = `Interesado: ${data.nombre} ${data.apellido}`;
                                ownerUsername[i].innerHTML = `Usuario: ${data.usuario}`;
                                ownerTlf[i].innerHTML = `Teléfono: ${data.telefono}`;
                                ownerAge[i].innerHTML = `Edad: ${getAge(clearDate(data.fecha_nacimiento))}`;
                                acceptAdoptionBtn.addEventListener("click", (e) => {
                                    fetch(`http://localhost:8081/adoption?starter=${data.usuario}&animalId=${animalId}&option=per`, { method: "POST" });
                                    setTimeout(() => {
                                        location.reload();
                                    }, 2000);
                                })
                            });
                    });
            });
        });
});

const btnYourPets = document.querySelector("#to-make-adoption");
btnYourPets.addEventListener("click", () => {
    const title = document.querySelector(".title");
    title.innerHTML = "Las mascotas que quieres adoptar";
    fillContainer("gp")
        .then(() => {

            const idsAnimal = Array.from(document.querySelectorAll(".id"));
            const namesAnimal = Array.from(document.querySelectorAll(".animal-name"));
            const ownerName = Array.from(document.querySelectorAll(".owner-name"));
            const ownerUsername = Array.from(document.querySelectorAll(".owner-username"));
            const ownerTlf = Array.from(document.querySelectorAll(".owner-tlf"));
            const ownerAge = Array.from(document.querySelectorAll(".owner-age"));

            const getAge = (date) => {
                const birthYear = parseInt(`${date[0]}${date[1]}${date[2]}${date[3]}`);
                const time = new Date();
                return time.getFullYear() - birthYear;
            }

            const clearDate = (date) => {
                let hasString = date.match("T04:00:00.000Z");
                if (hasString !== null) {
                    return date.replace("T04:00:00.000Z", "");
                }
                return date.replace("T04:30:00.000Z", "");
            }

            idsAnimal.map((item, i) => {
                fetch(`http://localhost:8081/animal/${item.href.replace("http://localhost:8081/animal/", "")}`,
                    { method: "POST" })
                    .then((response) => response.json())
                    .then((data) => {
                        ownerUsername[i].innerHTML = `Usuario: ${data.propietario}`;
                        namesAnimal[i].innerHTML = `Mascota: ${data.nombre}`;
                        fetch(`http://localhost:8081/usuario/${data.propietario}`, { method: "POST" })
                            .then((response) => response.json())
                            .then((data) => {
                                ownerName[i].innerHTML = `Propietario: ${data.nombre} ${data.apellido}`;
                                ownerTlf[i].innerHTML = `Teléfono: ${data.telefono}`;
                                ownerAge[i].innerHTML = `Edad: ${getAge(clearDate(data.fecha_nacimiento))}`;
                            });
                    });
            });
        });
});

const title = document.querySelector(".title");
title.innerHTML = "Las mascotas que quieres adoptar";
fillContainer("gp")
    .then(() => {

        const idsAnimal = Array.from(document.querySelectorAll(".id"));
        const namesAnimal = Array.from(document.querySelectorAll(".animal-name"));
        const ownerName = Array.from(document.querySelectorAll(".owner-name"));
        const ownerUsername = Array.from(document.querySelectorAll(".owner-username"));
        const ownerTlf = Array.from(document.querySelectorAll(".owner-tlf"));
        const ownerAge = Array.from(document.querySelectorAll(".owner-age"));

        const getAge = (date) => {
            const birthYear = parseInt(`${date[0]}${date[1]}${date[2]}${date[3]}`);
            const time = new Date();
            return time.getFullYear() - birthYear;
        }

        const clearDate = (date) => {
            let hasString = date.match("T04:00:00.000Z");
            if (hasString !== null) {
                return date.replace("T04:00:00.000Z", "");
            }
            return date.replace("T04:30:00.000Z", "");
        }

        idsAnimal.map((item, i) => {
            fetch(`http://localhost:8081/animal/${item.href.replace("http://localhost:8081/animal/", "")}`,
                { method: "POST" })
                .then((response) => response.json())
                .then((data) => {
                    ownerUsername[i].innerHTML = `Usuario: ${data.propietario}`;
                    namesAnimal[i].innerHTML = `Mascota: ${data.nombre}`;
                    fetch(`http://localhost:8081/usuario/${data.propietario}`, { method: "POST" })
                        .then((response) => response.json())
                        .then((data) => {
                            ownerName[i].innerHTML = `Propietario: ${data.nombre} ${data.apellido}`;
                            ownerTlf[i].innerHTML = `Teléfono: ${data.telefono}`;
                            ownerAge[i].innerHTML = `Edad: ${getAge(clearDate(data.fecha_nacimiento))}`;
                        });
                });
        });
    });

const btnAllAnimals = document.querySelector("#all-animals");
btnAllAnimals.addEventListener("click", () => {
    const title = document.querySelector(".title");
    title.innerHTML = "Todos tus animales";
    fillContainer("g*");
});