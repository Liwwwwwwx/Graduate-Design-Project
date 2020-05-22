const db = require('./database.js');

class UserInfo {
  getUserInfo(callback) {
    const sql = 'select * from user_info';

    db.query(sql, (err, results) => {
      if (err) {
        callback(true);
        return;
      }

      callback(false, results);
    })
  }

  getCount(callback) {
    const sql = 'select count(user_id) count from user_info';

    var count = 0;
    db.query(sql, (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      count = results;
      callback(false, count);
    })
  }

  insertOne(name, idenity, phone, homeowners, address, contract, callback) {
    const sql = 'insert into user_info(user_name,user_idenity,user_phone,user_homeowners,user_address,user_contract) values(?,?,?,?,?,?)';

    db.query(sql, [name, idenity, phone, homeowners, address, contract,], (err, results) => {
      if (err) {
        callback(true);
        return;
      }

      callback(false, results)
    })
  }

  deleteone(id, callback) {
    const sql = 'delete from user_info where user_id = ?';

    db.query(sql, [id], (err, results) => {
      if (err) {
        callback(true);
        return;
      }
      callback(false, results)
    })
  }

  upadateone(id,name,phone,homeowners,address,contract){
    const sql = 'update user_info set user_name = ? , user_idenity = ?, user_phone = ?,user_homeowners = ?,user_address = ?,user_contract = ? where userid = ? '
    db.query(sql,[name,phone,homeowners,address,contract,id], (err,results)=> {
      if(err) {
        callback(true);
        return ;
      }
      callback(false,results);
    })
  }
}

module.exports = UserInfo;
