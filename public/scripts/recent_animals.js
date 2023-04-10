makeSpecieFull = (shortSpecie) => {
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

fetch('http://localhost:8081/', { method: 'POST' })
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        const cardBodies = document.querySelectorAll('.card-body');
        const cardImage = document.querySelectorAll(".card-img-top");
        data.map((item, i) => {
            cardImage[i].src = `/media/animalMedia/${data[i].ruta_imagen}`;
            cardBodies[i].innerHTML = `
            <h4 class="animal-name">${data[i].nombre}</h4>
            <h5 class="animal-specie">${makeSpecieFull(data[i].especie)}</h5>
            <h5 class="animal-age">
            ${data[i].edad} 
            ${data[i].tipo === 'a' ? 'año(s)' : 'mes(es)'}</h5>
            <a href="/animal/${data[i].id}" class="btn btn-lg btn-hero">Ver más</a>
            `
        });

    });