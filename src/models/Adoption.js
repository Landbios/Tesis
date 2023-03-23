const db = require("../db/db");

class Adoption {
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
}

module.exports = Adoption;