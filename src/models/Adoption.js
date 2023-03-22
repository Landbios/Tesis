const db = require("../db/db");

class Adoption {
    static startAdoption = (starterUserName, animalToAdoptId, adoptionPosterUsername) => {
        // error message if error exists
        let reason = "Something went wrong in static method startAdoption from Adoption";

        if (starterUserName !== adoptionPosterUsername) {

            let query = `INSERT INTO adopciones (adoptante, adoptado, postulador) values ('${starterUserName}', '${animalToAdoptId}', '${adoptionPosterUsername}')`;
            db.query(query, async (err, res, fields) => {
                if (err) {
                    reason = "starterUserName and adoptionPosterUsername cannot be the same in static method startAdoption from adoption class";
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