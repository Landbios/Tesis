const bCrypt = require('bcryptjs');
const db = require('../db/db');

class User {
    constructor(dni, name, lastName, birthday, gender, parroquia, sector, tlf, mail, userName, password) {
        this.dni = dni;
        this.name = name;
        this.lastName = lastName;
        this.birthday = birthday;
        this.gender = gender;
        this.parroquia = parroquia;
        this.sector = sector;
        this.tlf = tlf;
        this.mail = mail;
        this.userName = userName;
        this.password = bCrypt.hashSync(password);
    }

    static createUser = (user) => {
        const query = `INSERT INTO usuarios (cedula, nombre, apellido, fecha_nacimiento, genero, parroquia, sector, telefono, email, usuario, password) VALUES ('${user.dni}', '${user.name}', '${user.lastName}', '${user.birthday}', '${user.gender}', '${user.parroquia}', '${user.sector}', '${user.tlf}', '${user.mail}', '${user.userName}','${user.password}')`;

        db.query(query, (err, results, fields) => {
            if (err) throw err;
            console.log("usuario añadido");
        });
    }

    static loginUser = (username, password) => {
        const query = `SELECT password FROM usuarios WHERE usuario='${username}'`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, results, fields) => {
                if (err) return reject({
                    login: false,
                    link: 'http://localhost:8081/login'
                });
                if (typeof results[0] !== "undefined") {

                    const hashedPassword = results[0].password;
                    if (!bCrypt.compareSync(password, hashedPassword)) {
                        reject({
                            login: false,
                            link: 'http://localhost:8081/login.html'
                        })
                    }
                    resolve({
                        login: true,
                        user: username,
                        link: 'http://localhost:8081/'
                    })
                }
                else {
                    reject({
                        login: false,
                        link: 'http://localhost:8081/login'
                    })

                }

            });
        });

    };

    static getUserInfo = (info, type) => {
        if (type === "user") {
            const query = `SELECT * FROM usuarios WHERE usuario='${info}'`
            return new Promise((resolve, reject) => {
                db.query(query, (err, res, fields) => {
                    if (err) throw reject(err);

                    return resolve(res[0]);

                });
            });
        }
        if (type === "email") {
            const query = `SELECT * FROM usuarios WHERE email='${info}'`
            return new Promise((resolve, reject) => {
                db.query(query, (err, res, fields) => {
                    if (err) throw reject(err);

                    return resolve(res[0]);

                });
            });
        }

        if (type === "cedula") {
            const query = `SELECT * FROM usuarios WHERE cedula='${info}'`
            return new Promise((resolve, reject) => {
                db.query(query, (err, res, fields) => {
                    if (err) throw reject(err);

                    return resolve(res[0]);

                });
            });
        }

    }

    static updateUserField = (uniqueFieldForIdentification, fieldToChange, value) => {
        console.log(bCrypt.hashSync(value));
        const query = `UPDATE usuarios SET ${fieldToChange}='${bCrypt.hashSync(value)}' WHERE ${uniqueFieldForIdentification.name}='${uniqueFieldForIdentification.value}'`;
        switch(fieldToChange) {
            case 'password':
                db.query(query, (err, res, fields) => {
                    if (err) throw err;
                    console.log("contraseña actualizada con exito");
                });
                break;
        }
    }
}

module.exports = User;