const db = require('./database.js');

class RepairInfo {
    getRepairInfo(callback) {
        const sql = 'select Repair_info.*,user_info.user_name from Repair_info,user_info where Repair_info.user_id = user_info.user_id';
        db.query(sql,(err, results)=>{
            if(err) {
                callback(true);
                return ;
            }

            callback(false, results);
        })
    }

    getCount(callback) {
        const sql = 'select count(repair_id) count from Repair_info';

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

    insertOne(user_id, content, state, receiver, callback) {
        const sql = 'insert into Repair_info(user_id,Repair_content,Repair_state,Repair_receiver) values(?,?,?,?)';
    
        db.query(sql, [user_id, content, state, receiver,], (err, results) => {
          if (err) {
            callback(true);
            return;
          }
    
          callback(false, results)
        })
      }
    
      deleteone(id, callback) {
        const sql = 'delete from Repair_info where Repair_id = ?';
    
        db.query(sql, [id], (err, results) => {
          if (err) {
            callback(true);
            return;
          }
          callback(false, results)
        })
      }

      upadateone(id,content,state,receiver,callback){
        const sql = 'update Repair_info set Repair_content = ?,	Repair_state = ?,	Repair_receiver = ? where Repair_id = ?'
        db.query(sql,[content,state,receiver,id], (err,results)=> {
          if(err) {
            callback(true);
            return ;
          }
          callback(false,results);
        })
      }

}

module.exports = RepairInfo;
