const db = require('./database.js');

class ChargeInfo {
    getChargeInfo(callback) {
        const sql = 'select Charge_info.*,user_info.user_name from Charge_info,user_info where Charge_info.user_id = user_info.user_id';
        db.query(sql, (err, results) => {
            if (err) {
                callback(true);
                return;
            }

            callback(false, results);
        })
    }

    getCount(callback) {
        const sql = 'select count(Charge_id) count from Charge_info';

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

    insertOne(user_id,proprty,water,gas,state,electricity, callback) {
        const sql = 'insert into user_info(user_id,Proprty_fees,Water_fees,Gas_fees,Charge_state,Electricity_fees) values(?,?,?,?,?,?)';

        db.query(sql, [user_id,proprty,water,gas,state,electricity,], (err, results) => {
            if (err) {
                callback(true);
                return;
            }

            callback(false, results)
        })
    }

    upadateone(id,Proprty_fees,Water_fees,Gas_fees,Charge_state,Electricity_fees,callback){
        const sql = 'update Charge_info set Proprty_fees = ?,Water_fees = ?,Gas_fees = ?,Charge_state = ?,Electricity_fees = ? where Charge_id = ?'
        db.query(sql,[Proprty_fees,Water_fees,Gas_fees,Charge_state,Electricity_fees,id], (err,results)=> {
          if(err) {
            callback(true);
            return ;
          }
          callback(false,results);
        })
      }


    deleteone(id, callback) {
        const sql = 'delete from Charge_info where Charge_id = ?';

        db.query(sql, [id], (err, results) => {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results)
        })
    }

}

module.exports = ChargeInfo;
