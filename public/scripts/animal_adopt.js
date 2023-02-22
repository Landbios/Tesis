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
    pageNumber = location.href.replace("http://localhost:8081/animal?page=", "");
}

btnNext.addEventListener("click", () => {
    let page = parseInt(pageNumber);
    page++;
    location.href = `?page=${page}`;
});

btnBack.addEventListener("click", () => {
    let page = parseInt(pageNumber);
    page--;
    if (page <= 1) {
        page = 1;
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
            /**
             * If no results, take the user to page 1 of the list
             */
            location.href = "http://localhost:8081/animal?page=1";
        }
        const cardContainer = document.querySelector(".card-container");
        const container = document.querySelector(".animal-container");
        while (cardContainer.childElementCount < data.length) {
            cardContainer.innerHTML += `
                    <div class="col-md-3">

                    <div class="card">
                        
                    <img class="card-img-top"
                        src="https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        alt="">
                    <div class="card-body">
                        <h4 class="animal-name">${data[cardContainer.childElementCount].nombre}</h4>
                        <h5 class="animal-data">${utils.makeSpecieFull(data[cardContainer.childElementCount].especie)}</h5>
                        <h5 class="animal-data">${data[cardContainer.childElementCount].edad} <span>${data[cardContainer.childElementCount].tipo === 'a' ? 'años' : 'meses'}</span></h5>
                        <div class="row">
                        <div class="col-md-6">
                            <a href=""  class="btn btn-adopt btn-lg btn-hero">${getUsernameFromSingleCookie(document.cookie) === data[cardContainer.childElementCount].propietario ? '' : 'Adoptar'}</a>
                        </div>
                        <div class="col-md-6">
                            <a href="/animal/${data[cardContainer.childElementCount].id}" class="btn btn-lg btn-hero">Ver mas</a>
                        </div>
                        </div>
                    </div>
                    </div>
            
                </div>
            `
        }

        const btnAdopt = document.querySelectorAll('.btn-adopt');

        for (let i = 0; i < btnAdopt.length; i++) {
            if (btnAdopt[i].innerHTML === '') {
                btnAdopt[i].parentElement.remove();
            }
        }

    });

