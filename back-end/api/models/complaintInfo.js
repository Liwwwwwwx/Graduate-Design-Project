const db = require('./database.js');

class ComplaintInfo {
    getComplaintInfo(callback) {
        const sql = 'select Complaint_info.*,user_info.user_name from Complaint_info,user_info where Complaint_info.user_id = user_info.user_id';
        db.query(sql,(err, results)=>{
            if(err) {
                callback(true);
                return ;
            }

            callback(false, results);
        })
    }

    getCount(callback) {
        const sql = 'select count(complaint_id) count from Complaint_info';

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
    upadateone(id,content,state,receiver,callback){
      const sql = 'update Complaint_info set Complaint_content = ?,	Complaint_state = ?,	Complaint_receiver = ? where Complaint_id = ?'
      db.query(sql,[content,state,receiver,id], (err,results)=> {
        if(err) {
          callback(true);
          return ;
        }
        callback(false,results);
      })
    }

    insertOne(user_id, content, state, receiver, callback) {
        const sql = 'insert into Complaint_info(user_id,Complaint_content,Complaint_state,Complaint_receiver) values(?,?,?,?)';
    
        db.query(sql, [user_id, content, state, receiver,], (err, results) => {
          if (err) {
            callback(true);
            return;
          }
    
          callback(false, results)
        })
      }
    
      deleteone(id, callback) {
        const sql = 'delete from Complaint_info where Complaint_id = ?';
    
        db.query(sql, [id], (err, results) => {
          if (err) {
            callback(true);
            return;
          }
          callback(false, results)
        })
      }

}

module.exports = ComplaintInfo  ;
