const getUsernameFromSingleCookie = (individualCookie) => {
    return individualCookie.replace(/user=/g, "");
};



const fillContainer = () => {
    return new Promise((resolve, reject) => {
        const starter = getUsernameFromSingleCookie(document.cookie);
        const route = `http://localhost:8081/adoption?starter=${starter}&option=gp`
        fetch(route, { method: "POST" })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const cardContainer = document.querySelector(".card-container");
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

                    <div class="col-md-6">
                        <a href="/animal/${item.adoptado}" class="btn btn-lg btn-hero id">Ver mas</a>
                    </div>

                    </div>
                </div>
            </div>
        </div>
            `
                })
                resolve(true);
            })
            .catch((err) => {
                reject(false);
                console.log(false);
            });
    });
}

fillContainer()
    .then((response) => {
        const idsAnimal = Array.from(document.querySelectorAll(".id"));
        const namesAnimal = Array.from(document.querySelectorAll(".animal-name"));
        const ownerName = Array.from(document.querySelectorAll(".owner-name"));
        const ownerUsername = Array.from(document.querySelectorAll(".owner-username"));
        const ownerTlf = Array.from(document.querySelectorAll(".owner-tlf"));
        const ownerAge = Array.from(document.querySelectorAll(".owner-age"));
        
        const clearDate = (date) => {
            return date.replace("T04:00:00.000Z", "");
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
                            ownerName[i].innerHTML = `Propietario:${data.nombre} ${data.apellido}`;
                            ownerTlf[i].innerHTML = `Teléfono: ${data.telefono}`;
                            ownerAge[i].innerHTML = `Fecha de Nacimiento: ${clearDate(data.fecha_nacimiento)}`
                        });
                });
        });
    });