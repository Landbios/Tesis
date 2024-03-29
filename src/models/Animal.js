const db = require('../db/db');

class Animal {
    constructor(name, specie, breed, description, age, edad_tipo, isNeutered, isVaccinated, gender, owner) {
        this.name = name;
        this.specie = specie;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.edad_tipo = edad_tipo;
        this.isNeutered = isNeutered;
        this.isVaccinated = isVaccinated;
        this.gender = gender;
        this.owner = owner;
    }

    static addAnimal = (animal) => {
        const query = `INSERT INTO animales (nombre, especie, raza, descripcion, edad, tipo, es_castrado, es_vacunado, genero, propietario) VALUES ('${animal.name}', '${animal.specie}', '${animal.breed}', '${animal.description}', '${animal.age}', '${animal.edad_tipo}', '${animal.isNeutered}', '${animal.isVaccinated}', '${animal.gender}', '${animal.owner}')`;

        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) {
                    reject({
                        link: '',
                        state: 'not added',
                        errmsg: err.sqlMessage
                    });
                };
                resolve({
                    link: 'http://localhost:8081/animal',
                    state: 'added'
                });
            });
        });
    }

    static getAllAnimals = (page, latest = false, specie) => {
        let to = page * 12;
        let from = to - 12;
        if (typeof specie !== 'undefined') {
            let query = `SELECT * FROM animales WHERE especie=`
            switch (specie) {
                case 'g':
                    query += `'g'`;
                    return new Promise((resolve, reject) => {
                        db.query(query, (err, res, fields) => {
                            if (err) throw reject(err);
                            resolve(res);
                        });
                    });
                case 'p':
                    query += `'p'`;
                    return new Promise((resolve, reject) => {
                        db.query(query, (err, res, fields) => {
                            if (err) throw reject(err);
                            resolve(res);
                        });
                    });
                case 'h':
                    query += `'h'`;
                    return new Promise((resolve, reject) => {
                        db.query(query, (err, res, fields) => {
                            if (err) throw reject(err);
                            resolve(res);
                        });
                    });
                case 'c':
                    query += `'c'`;
                    return new Promise((resolve, reject) => {
                        db.query(query, (err, res, fields) => {
                            if (err) throw reject(err);
                            resolve(res);
                        });
                    });
                default:
                    throw new Error("Specie doesn't exist");
            }
        }
        if (latest) {
            const query = `(SELECT * FROM animales ORDER BY id DESC LIMIT 5) ORDER BY ID ASC`; //sql query to get last 4 results by id in descending order, then order it by ascending order
            return new Promise((resolve, reject) => {
                db.query(query, (err, results, fields) => {
                    if (err) throw reject(err);
                    resolve(results);
                });
            })

        }

        const query = `SELECT * FROM animales WHERE es_adoptado=0`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, results, fields) => {
                if (err) throw reject(err);
                resolve(results);
            });
        });

    }

    static getAnimal = (id) => {
        const query = `SELECT * FROM animales WHERE id=${id}`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, results, fields) => {
                if (err) throw err;

                if (typeof results[0] === 'undefined') reject({
                    msg: 'Animal no encontrado'
                });
                resolve(results[0]);
            });
        });

    }
};

module.exports = Animal;