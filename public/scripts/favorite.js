const utils = {
    makeGenderFull(shortGender) {
        if (shortGender !== 'f') {
            return 'Macho';
        } else {
            return 'Hembra';
        }
    },

    makeSpecieFull(shortSpecie) {
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
}

const getUsernameFromSingleCookieForFavorite = (individualCookie) => {
    return individualCookie.replace(/user=/g, "");
}

const fillContainer = () => {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8081/favorite?username=${getUsernameFromSingleCookieForFavorite(document.cookie)}&option=g`, { method: "POST" })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const cardContainer = document.querySelector(".card-container");

                data.map((item, i) => {

                    cardContainer.innerHTML += `
                        <div class="col-md-3">
                            <div class="card">

                                <img class="card-img-top"
                                    alt="">
                                <div class="card-body">

                                    <h4 class="animal-name"></h4>

                                    <div class="col-md-6">
                                        <a href="/animal/${item.id_animal}" class="btn btn-lg btn-hero id">Ver mas</a>
                                    </div>

                                    </div>
                                </div>
                            </div>
                        </div>`;
                    fetch(`http://localhost:8081/animal/${item.id_animal}`, { method: "POST" })
                        .then((response) => response.json())
                        .then((animal) => {
                            const cardImgArr = Array.from(document.querySelectorAll(".card-img-top"));
                            cardImgArr[i].src = `/media/animalMedia/${animal.ruta_imagen}`;

                        })
                });
                resolve(true);
            })
            .catch((err) => {
                console.log(err);
                reject(false);
            });
    });

}

fillContainer()
    .then(() => {
        const idsAnimal = Array.from(document.querySelectorAll(".id"));
        const namesAnimal = Array.from(document.querySelectorAll(".animal-name"));

        idsAnimal.map((item, i) => {
            fetch(`http://localhost:8081/animal/${item.href.replace("http://localhost:8081/animal/", "")}`,
                { method: "POST" })
                .then((response) => response.json())
                .then((data) => {
                    namesAnimal[i].innerHTML = data.nombre;
                });
        });


    });
