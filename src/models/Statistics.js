/**Statistics class
 * page's statistics
 */

const db = require('../db/db');

class Statistics {
    static getUserStats() {
        const query = "SELECT count(*) FROM usuarios";
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(err);
                resolve(res);
            });
        });
    }

    static getAnimalStats() {
        const query = "SELECT * FROM animales";
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(err);
                const responseObject = {
                    cantidad: res.length,
                    machos: 0,
                    hembras: 0,
                    vacunados: 0,
                    noVacunados: 0,
                    felinos: 0,
                    caninos: 0, 
                    conejos: 0,
                    hamsters: 0,
                    esterilizados: 0,
                    noEsterilizados: 0,
                    animalMasAntiguo: res[0],
                    animalMasReciente: 0
                };
                for (let i = 0; i < res.length; i++) {
                    if (res[i].genero !== 'm') responseObject.hembras++
                    else responseObject.machos++
                    if (res[i].es_vacunado === 1) responseObject.vacunados++
                    else responseObject.noVacunados++;
                    if (res[i].especie === 'g') responseObject.felinos++;
                    else if (res[i].especie === 'p') responseObject.caninos++;
                    else if (res[i].especie === 'c') responseObject.conejos++;
                    else responseObject.hamsters++;
                    if (i === res.length-1) responseObject.animalMasReciente = res[i];
                    if (res[i].es_castrado === 1) responseObject.esterilizados++;
                    else responseObject.noEsterilizados++;
                }
                resolve(responseObject);
            });
        });
    }

    static getAdoptionStats() {
        const query = "SELECT count(*) FROM adopciones";
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(err);
                resolve(res);
            });
        });
    }
}
Statistics.getAnimalStats();
module.exports = Statistics;