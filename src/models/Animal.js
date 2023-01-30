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

        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) {
                    reject({
                        link: '',
                        state: 'not added',
                        errmsg: 'err.sqlMessage'
                    });
                    throw err;
                };
                resolve({
                    link: 'http://localhost:8081/animal',
                    state: 'added'
                });
            });
        });
    }

    //parameter is response (res) object from express
    static getAllAnimals = () => {
        const query = "SELECT * FROM animales";
        return new Promise((resolve, reject) => {
            db.query(query, (err, results, fields) => {
                if (err) throw reject(err);
                resolve(results);
            });
        });
        
    }

    static getAnimal = (id) => {
        const query = `SELECT * FROM animales WHERE id=${id}`;
        return new Promise ((resolve, reject) => {
            db.query(query, (err, results, fields) => {
                if (err) throw reject(err);
                resolve(results[0]);
            });
        });
        
    }
};

module.exports = Animal;