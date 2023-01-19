const db = require('../db/db');

class Animal {
    constructor(name, specie, breed, description, age, isNeutered, gender) {
        this.name = name;
        this.specie = specie;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.isNeutered = isNeutered;
        this.gender = gender;
    }

    static addAnimal = (animal) => {
        const query = `INSERT INTO animales (nombre, especie, raza, descripcion, edad, es_castrado, genero) VALUES ('${animal.name}', '${animal.specie}', '${animal.breed}', '${animal.description}', '${animal.age}', '${animal.isNeutered}', '${animal.gender}')`;

        db.query(query, (err, res, fields) => {
            if (err) throw err;
            console.log("animal añadido");
        })
    }

    //parameter is response (res) object from express
    static getAllAnimals = (res) => {
        const query = "SELECT * FROM animales";
        db.query(query, (err, results, fields) => {
            if (err) throw err;
            res.json(results);
            res.end();
        })
    }
};

module.exports = Animal;