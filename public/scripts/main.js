fetch(location.href, { method: 'POST' })
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        const container = document.querySelector('.carousel-inner')
        data.map((item, i) => {
            container.innerHTML += `
            <div class="carousel-item ${i === 0 ? 'active' : ""}">
                <div class="card">
                <img class="card-img-top" src="https://images.unsplash.com/photo-1561495376-dc9c7c5b8726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                <div class="card-body">
                      <h4 class="animal-name">${item.nombre}</h4>
                      <h5 class="animal-data">${item.raza}</h5>
                      <h5 class="animal-data">${item.edad}</h5>
                      <p class="animal-descrip">${item.descripcion}</p>
                      <a href="http://localhost:8081/animal/${item.id}" class="btn btn-lg btn-hero">Ver más</a>
                </div>
            </div>
          </div>
            
            `
        });
    })