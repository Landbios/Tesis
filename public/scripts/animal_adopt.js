fetch('http://localhost:8081/animal/animalDB', { method: 'POST' })
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        const cardContainer = document.querySelector(".card-container");
        const container = document.querySelector(".animal-container");
        console.log(data);

        while (cardContainer.childElementCount < data.length) {
            console.log(cardContainer.childElementCount);
            cardContainer.innerHTML += `
                    <div class="col-md-3">

                    <div class="card">
                    <h4>${data[cardContainer.childElementCount].id}</h4>
                    <img class="card-img-top"
                        src="https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        alt="">
                    <div class="card-body">
                        <h4 class="animal-name">${data[cardContainer.childElementCount].nombre}</h4>
                        <h5 class="animal-data">Liebre</h5>
                        <h5 class="animal-data">9 meses</h5>
                        <p class="animal-descrip">Amigable, jugueton y sabe rodar</p>
                        <div class="row">
                        <div class="col-md-6">
                            <a href="" class="btn btn-lg btn-hero">Adoptar</a>
                        </div>
                        <div class="col-md-6">
                            <a href="animal_info.html" class="btn btn-lg btn-hero">Ver mas</a>
                        </div>
                        </div>
                    </div>
                    </div>
            
                </div>
            `
            console.log(cardContainer.childElementCount);
            console.log(cardContainer.innerHTML);
        }

    });