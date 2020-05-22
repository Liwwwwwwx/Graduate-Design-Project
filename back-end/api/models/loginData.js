const db = require('./database.js');

class LoginData {
    getAll(callback) {
        const sql = 'select * from admin';
        var datas = [];
        db.query(sql , (err, results) => {
            if(err) {
                callback(true);
                return ;
            }
            results.forEach((e) =>{
                datas.push(e);
            });
            callback(false, datas);
        })
    }

    getOne(name, callback) {
        const sql = 'select psw from admin where user = ?';
        db.query(sql, [name], (err, results) =>{
            if(err) {
                callback(true);
                return ;
            }
            callback(false, results);
        });
    }
}

module.exports = LoginData;
