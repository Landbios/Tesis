/**
 * Utility functions to help when rendering cards
 * I hope names are self-explanatory
 */
const utils = {
    makeGenderFull(shortGender) {
        if (shortGender !== 'f') {
            return 'Macho';
        } else {
            return 'Hembra';
        }
        //error
        return false;
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



// filter search by specie
const filterSearch = document.getElementById("filter");


filterSearch.addEventListener("change", (e) => {
    if (e.target.value !== "") {
        location.href = `http://localhost:8081/animal?page=${pageNumber}&specie=${filterSearch.value}`;
        return;
    }

    location.href = "http://localhost:8081/animal";

});

// page queries
const queries = new URLSearchParams(document.location.search);

/**
 * Begin of buttons paging system
 * next is for going to the next page of the animal list
 * back is for the opposite
 */
const btnNext = document.getElementById("next");
const btnBack = document.getElementById("back");

let pageNumber = null;

if (location.href === "http://localhost:8081/animal") {
    pageNumber = 1;
} else {
    pageNumber = location.href.replace(/[a-zA-Z"$#%&/=()¿?\\¨{}\[\]:;,\^`-]/gi, "");
    pageNumber = pageNumber.replace("8081", "");
}



// getting specie url query variable
let filteredSpecie = queries.get("specie");

btnNext.addEventListener("click", () => {
    let page = parseInt(pageNumber);
    page++;
    if (filteredSpecie !== null) {
        location.href = `?page=${page}&specie=${filteredSpecie}`;
    }
    location.href = `?page=${page}`;
});

btnBack.addEventListener("click", () => {
    let page = parseInt(pageNumber);
    page--;
    if (page <= 1) {
        page = 1;
    }
    if (filteredSpecie !== null) {
        location.href = `?page=${page}&specie=${filteredSpecie}`;
    }
    location.href = `?page=${page}`;
});

/**
 * End of buttons config
 */

const getUsernameFromSingleCookie = (individualCookie) => {
    return individualCookie.replace(/user=/g, "");
}

if (document.querySelector(".username") !== null) {
    const username = document.querySelector(".username");
    username.innerHTML = getUsernameFromSingleCookie(document.cookie);
}

fetch(location.href, { method: 'POST' })
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        if (typeof data[0] === 'undefined') {
            const cardContainer = document.querySelector(".card-container");
            cardContainer.innerHTML = "<h2>No hay nada <a href='http://localhost:8081/animal'>Regresar al inicio</a></h2>";
        }
        const cardContainer = document.querySelector(".card-container");
        let i = 0;
        while (cardContainer.childElementCount < data.length) {
            cardContainer.innerHTML += `
                    <div class="col-md-3">
                        <div class="card">
                            
                            <img class="card-img-top"
                                src="/media/animalMedia/${data[cardContainer.childElementCount].ruta_imagen}"
                                alt="">
                            <div class="card-body">
                                    <button class="btn-heart" id="favorite_${i}">🤍</button>

                                    <h4 class="animal-name">${data[cardContainer.childElementCount].nombre}</h4>
                                
                                
                                <h5 class="animal-data">${utils.makeSpecieFull(data[cardContainer.childElementCount].especie)}</h5>

                                <h5 class="animal-data">${data[cardContainer.childElementCount].edad} <span>${data[cardContainer.childElementCount].tipo === 'a' ? 'años' : 'meses'}</span></h5>

                                <div class="row">

                                    <div class="col-md-6">
                                        <a href="/animal/${data[cardContainer.childElementCount].id}" class="btn btn-lg btn-hero id">Ver mas</a>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
            
                </div>
            `;

            i++;
        }

        for
            (
            let i = 0;
            i < document.querySelectorAll(".btn-heart").length;
            i++) {

            const btnFavorite =
                document.getElementById(`favorite_${i}`);


            /**
             * Favorite button functionality
             */
            btnFavorite.addEventListener("click", (e) => {
                const animalId = e.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[1].firstElementChild.href.replace("http://localhost:8081/animal/", "");

                switch (e.target.innerHTML) {
                    case '💖':
                        // remove favorite
                        e.target.innerHTML = '🤍';
                        fetch(`http://localhost:8081/favorite?animalId=${animalId}&username=${getUsernameFromSingleCookie(document.cookie)}&option=d`,
                            { method: 'POST' });
                        break;

                    case '🤍':
                        // new favorite
                        e.target.innerHTML = '💖';

                        fetch(`http://localhost:8081/favorite?animalId=${animalId}&username=${getUsernameFromSingleCookie(document.cookie)}&option=a`,
                            { method: 'POST' });
                        break;

                    default:
                        e.target.innerHTML = '🤍';
                }
            });

        }

        fetch(`http://localhost:8081/favorite?username=${getUsernameFromSingleCookie(document.cookie)}&option=g`, { method: "POST" })

            .then((response) => response.json())
            .then((data) => {
                const animalCardSeeMoreButtons = Array.from(document.querySelectorAll(".id"));
                const buttonsHeartFavorite = Array.from(document.querySelectorAll(".btn-heart"));
                animalCardSeeMoreButtons.map((item, i) => {
                    const currentId = parseInt(item.href.replace("http://localhost:8081/animal/", ""));
                    for (let j = 0; j < data.length; j++) {
                        if (currentId === data[j].id_animal) {
                            buttonsHeartFavorite[i].innerHTML = "💖";
                        }
                    }
                });
            });

    });



