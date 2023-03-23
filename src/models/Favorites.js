const db = require('../db/db');

class Favorite {
    constructor(animalId, username) {
        this.animalId = animalId;
        this.username = username;
    }

    static addFavorite = (favorite) => {
        const query = `INSERT INTO favoritos (id_animal, usuario) VALUES ('${favorite.animalId}', '${favorite.username}')`;

        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw err;
                resolve(res);
            });
        });
    }

    static getFavorites = (username) => {
        const query = `SELECT * FROM favoritos WHERE usuario='${username}'`;

        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(err);
                resolve(res);
            });
        });
    }

    static deleteFavorite = (animalId, username) => {
        const query = `DELETE FROM favoritos WHERE id_animal='${animalId}' AND usuario='${username}'`;

        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(err)
                resolve(res);
            });
        });
    }
}

module.exports = Favorite;