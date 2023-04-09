const db = require("../db/db");

class Adoption {

    static isanimalAdoptedTrue = (animalId) => {
        let query = `SELECT * FROM adopciones WHERE adoptado='${animalId}'`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) return reject(err);
                res.map((item, i, a) => {
                    if (item.estado_postulador === 1) return resolve(true);
                    if (a.length - 1 === i) return resolve(false);
                })
            });
        });
    }

    // get the animal other users want from a specific user's posted animal
    static getAdoptionsForUser = (username) => {
        let query = `SELECT * FROM adopciones WHERE postulador='${username}' AND estado_postulador=0`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) return reject(err);
                return resolve(res);
            });
        });
    }

    // get the animals the user wants to adopt 
    static getPetsForUser = (username) => {
        let query = `SELECT * FROM adopciones WHERE adoptante='${username}' AND estado_postulador=0`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) return reject(err);
                let returningItem = [];
                for (let i = 0; i < res.length; i++) {
                    Adoption.isanimalAdoptedTrue(res[i].adoptado)
                        .then((response) => {
                            if (!response) {
                                returningItem.push(res[i]);
                            }
                        })
                        .then(() => {
                            if (i === res.length - 1) resolve(returningItem);
                        });
                }
            });
        });
    }

    static isUserAlreadyAdoptingAnimal = (user, animalId) => {
        let query = `SELECT * FROM adopciones WHERE adoptante='${user}' AND adoptado='${animalId}'`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(err);
                if (res.length > 0) {
                    return resolve(true);
                }
                resolve(false)
            });
        });

    }

    static startAdoption = (adopterUserName, animalToAdoptId, posterUsername) => {
        // error message if error exists
        let reason = "Something went wrong in static method startAdoption from Adoption";

        if (adopterUserName !== posterUsername) {

            let query = `INSERT INTO adopciones (adoptante, adoptado, postulador) values ('${adopterUserName}', '${animalToAdoptId}', '${posterUsername}')`;
            db.query(query, (err, res, fields) => {
                if (err) {
                    throw {
                        isSuccess: false,
                        sqlError: err
                    };
                }
                return true;

            });
        }
    }

    static makeAdoption = (adoptionStarter, AdoptionPoster, animalId) => {
        let query = `UPDATE adopciones SET estado_postulador=1 WHERE adoptante='${adoptionStarter}' AND postulador='${AdoptionPoster}' AND adoptado='${animalId}'`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(err);
                let queryToUpdateAnimalAdoptionStatus = `UPDATE animales SET es_adoptado=1 WHERE id='${animalId}'`;
                db.query(queryToUpdateAnimalAdoptionStatus, (err, res, fields) => {
                    if (err) {
                        return reject({
                            isSuccess: false,
                            sqlError: err.sqlMessage
                        });
                    }
                    return resolve(true);

                });
            });
        });
    }
}

module.exports = Adoption;