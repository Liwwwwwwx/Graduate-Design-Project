const HouseInfoData = require('../models/houseInfo.js');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var houseInfoData = new HouseInfoData();


router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset = "utf-8"');
  houseInfoData.getHouseInfo((err, results) => {
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
  const userid = req.body.userid,
        address = req.body.address,
        area = req.body.area,
        constraction = req.body.constraction,
        sell_info = req.body.sell_info,
        equipment = req.body.equipment;
  houseInfoData.insertOne(userid, address, area, constraction, sell_info, equipment, (err) => {
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
  houseInfoData.upadateone(req.body.id,req.body.address,req.body.area,req.body.constraction,req.body.sell_info,req.body.equipment, (err) =>{
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
  const id = req.body.h_id;
  houseInfoData.deleteone(id, (err) =>{
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
router.get('/housecount', (req,res) =>{
  res.header('Access-Control-Allow-Origin','*');
  houseInfoData.getCount((err, count)=>{
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
