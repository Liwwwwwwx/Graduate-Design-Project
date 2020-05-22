const RepairInfoData = require('../models/repairInfo.js');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var repairInfoData = new RepairInfoData();


router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset = "utf-8"');
  repairInfoData.getRepairInfo((err, results) => {
    if (err) {
      console.error(err);
      res.send(JSON.stringify({
        status:'102',
        msg:'失败'
      }))
      return;
    }

    res.send(JSON.stringify({
      status:'200',
      msg:'成功',
      data:results
    }));
  });
});

router.post('/update', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  repairInfoData.upadateone(req.body.id,req.body.content,req.body.state,req.body.receiver, (err) =>{
    if (err) {
      console.error(err);
      res.send(JSON.stringify({
        status:'102',
        msg:'错误',
      }));
      return ;
    }
    
    res.send(JSON.stringify({
      status:'200',
      msg:'成功',
    }))
  })
})

router.post('/insertone', (req,res)=>{
  res.header('Access-Control-Allow-Origin','*');
  const user_id = req.body.user_id,
        content = req.body.content,
        state = req.body.state,
        receiver = req.body.receiver;
  repairInfoData.insertOne(user_id, content, state, receiver, (err) => {
    if(err) {
      console.error(err);
      res.send(JSON.stringify({
        status:'102',
        msg:'错误',
      }));
      return ;
    }

    res.send(JSON.stringify({
      status:'200',
      msg:'成功',
      //userCount:count
    }))
  })
})

router.post('/del', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const id = req.body.repair_id;
  repairInfoData.deleteone(id, (err) =>{
    if (err) {
      console.error(err);
      res.send(JSON.stringify({
        status:'102',
        msg:'错误',
      }));
      return ;
    }
    
    res.send(JSON.stringify({
      status:'200',
      msg:'成功',
      //userCount:count
    }))
  })
})

//获取总数量
router.get('/repaircount', (req,res) =>{
  res.header('Access-Control-Allow-Origin','*');
  repairInfoData.getCount((err, count)=>{
      if (err) {
        console.error(err);
        res.send(JSON.stringify({
          status:'102',
          msg:'错误',
        }));
        return ;
      }

      res.send(JSON.stringify({
        status:'200',
        msg:'成功',
        userCount:count
      }))
    })
})

module.exports = router;
