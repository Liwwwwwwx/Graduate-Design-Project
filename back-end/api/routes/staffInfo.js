const StaffInfoData = require('../models/staffInfo.js');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var staffInfoData = new StaffInfoData();


router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset = "utf-8"');
  staffInfoData.getStaffInfo((err, results) => {
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

router.post('/insertone', (req,res)=>{
  res.header('Access-Control-Allow-Origin','*');
  const address = req.body.address,
        contract = req.body.contract,
        position = req.body.position,
        name = req.body.name;
  staffInfoData.insertOne(address,contract,position,name, (err) => {
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
    }))
  })
})

router.post('/update', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  staffInfoData.upadateone(req.body.id,req.body.address,req.body.contract,req.body.position,req.body.name, (err) =>{
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

router.post('/del', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const id = req.body.staff_id;
  staffInfoData.deleteone(id, (err) =>{
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

//获取总数量
router.get('/staffcount', (req,res) =>{
  res.header('Access-Control-Allow-Origin','*');
    staffInfoData.getCount((err, count)=>{
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
