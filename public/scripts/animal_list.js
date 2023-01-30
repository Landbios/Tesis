fetch('http://localhost:8081/animal/animalDB', { method: 'POST' })
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        const container = document.querySelector('.container');

        data.map((item, i) => {
            container.innerHTML += `
                <div>
                    <p id="id${i}">${item.id}</p>
                    <p>nombre: ${item.nombre}</p>
                    <p>especie: ${item.especie}</p>
                    <p>edad: ${item.edad}</p>
                    <p>Estado de esterilización: ${item.es_castrado}</p>
                    <p>Raza: ${item.raza}</p>
                    <button id="btn${i}">Adoptar</button>
                </div>
                <br>
                <hr>
            `;
        });
    });