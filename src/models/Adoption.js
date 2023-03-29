const db = require("../db/db");

class Adoption {
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
                return resolve(res);
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
                        reason: reason,
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
                let newQuery = `DELETE FROM adopciones WHERE`
            });
        });
    }
}

module.exports = Adoption;