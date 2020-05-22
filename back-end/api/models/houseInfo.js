const db = require('./database.js');

class HouseInfo {
    getHouseInfo(callback) {
        const sql = 'select house_info.*,user_info.user_name from house_info,user_info where house_info.user_id = user_info.user_id';
        db.query(sql,(err, results)=>{
            if(err) {
                callback(true);
                return ;
            }

            callback(false, results);
        })
    }

    getCount(callback) {
        const sql = 'select count(h_id) count from house_info';

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

    insertOne(userid, address, area, constraction, sell_info, equipment, callback) {
        const sql = 'insert into house_info(user_id,h_address,h_area,h_constraction,h_sell_info,h_equipmnt) values(?,?,?,?,?,?)';
    
        db.query(sql, [userid, address, area, constraction, sell_info, equipment,], (err, results) => {
          if (err) {
            callback(true);
            return;
          }
    
          callback(false, results)
        })
      }
      upadateone(id,address,area,constraction,sell_info,equipment,callback){
        const sql = 'update house_info set h_address = ?,	h_area = ?,	h_constraction = ?,	h_sell_info = ?,	h_equipment = ? where h_id = ?'
        db.query(sql,[address,area,constraction,sell_info,equipment,id], (err,results)=> {
          if(err) {
            callback(true);
            return ;
          }
          callback(false,results);
        })
      }
      
      deleteone(id, callback) {
        const sql = 'delete from house_info where h_id = ?';
    
        db.query(sql, [id], (err, results) => {
          if (err) {
            callback(true);
            return;
          }
          callback(false, results)
        })
      }

}

module.exports = HouseInfo;