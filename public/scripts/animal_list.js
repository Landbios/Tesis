fetch('http://localhost:8081/animal/animalDB', { method: 'POST' })
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        console.log(data);
    });