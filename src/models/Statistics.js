/**Statistics class
 * page's statistics
 */

const db = require('../db/db');

class Statistics {
    static getUserStats = () => {
        const query = "SELECT count(*) FROM usuarios";
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(err);
                resolve(res);
            });
        });
    }

    static getAnimalStats = () => {
        const query = "SELECT count(*) FROM animales";
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(err);
                resolve(res);
            });
        });
    }

    static getAdoptionStats = () => {
        const query = "SELECT count(*) FROM adopciones";
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(err);
                resolve(res);
            });
        });
    }
}

module.exports = Statistics;