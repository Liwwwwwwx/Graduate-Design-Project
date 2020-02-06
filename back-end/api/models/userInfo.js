const db = require('./database.js');

class UserInfo {
  getUserInfo(callback) {
    const sql = 'select * from user_info';

    db.query(sql, (err, results) => {
      if(err) {
        callback(true);
        return ;
      }

      callback(false, results);
    })
  }
}

module.exports = UserInfo;
