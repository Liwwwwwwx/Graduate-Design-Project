const db = require('./database.js');

class StaffInfo {
    getStaffInfo(callback) {
        const sql = 'select * from staff_info';
        db.query(sql,(err, results)=>{
            if(err) {
                callback(true);
                return ;
            }

            callback(false, results);
        })
    }

    getCount(callback) {
        const sql = 'select count(staff_id) count from staff_info';

        var count = 0;
        db.query(sql,(err, results)=>{
            if(err) {
                callback(true);
                return ;
            }
            count = results;
            callback(false, count);
        })
    }

    insertOne(address,contract,position,name,callback) {
        const sql = 'insert into staff_info(staff_address,staff_contract,staff_position,staff_name) values(?,?,?,?)';

        db.query(sql,[address,contract,position,name],(err, results) => {
            if(err) {
                callback(true);
                return ;
            }

            callback(false,results)
        })
    }

    upadateone(id,address,contract,position,name,callback){
        const sql = 'update staff_info set staff_address = ?,staff_contrac = ?t,staff_positio = ?n,staff_name wh = ?ere staff_id = ?'
        db.query(sql,[address,contract,position,name,id], (err,results)=> {
          if(err) {
            callback(true);
            return ;
          }
          callback(false,results);
        })
      }

    deleteone(id,callback) {
        const sql = 'delete from staff_info where staff_id = ?';

        db.query(sql,[id], (err, results) => {
            if(err){
                callback(true);
                return ;
            }
            callback(false,results)
        })
    }

}

module.exports = StaffInfo;