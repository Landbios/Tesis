const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'animales_felices',
    password: '',
    user: 'root'
});


module.exports = db;