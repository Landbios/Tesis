const db = require("../db/db");

class Notifications {
    constructor(from, to, msg) {
        this.from = from;
        this.to = to;
        this.msg = msg;
    }

    sendNotification() {
        const sender = this.from;
        const receiver = this.to;
        const msg = this.msg;
        const query = `INSERT INTO notificaciones (emisor, receptor, mensaje) VALUES ('${sender}', '${receptor}', '${msg}')`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) throw reject(false);
                return resolve(true);
            });
        });


    }

    static getNotifications(username) {
        const query = `SELECT * FROM notificaciones WHERE receptor='${username}' AND es_nueva=1`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, res, fields) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                return resolve(res);
            });
        });
    }
}

module.exports = Notifications;