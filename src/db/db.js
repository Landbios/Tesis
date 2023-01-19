const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'animales_felices',
    password: 'dostoyevskiwiiu10100',
    user: 'artorias'
});


module.exports = db;