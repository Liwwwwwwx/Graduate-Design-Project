const ChargeInfoData = require('../models/chargeInfo.js');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var chargeInfoData = new ChargeInfoData();


router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset = "utf-8"');
  chargeInfoData.getChargeInfo((err, results) => {
    if (err) {
      console.error(err);
      res.send(JSON.stringify({
        status: '102',
        msg: '失败'
      }))
      return;
    }

    res.send(JSON.stringify({
      status: '200',
      msg: '成功',
      data: results
    }));
  });
});

router.post('/insertone', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const user_id = req.body.user_id,
        proprty = req.body.proprty,
        water = req.body.water,
        gas = req.body.gas,
        state = req.body.state,
        electricity = req.body.electricity;
  chargeInfoData.insertOne(user_id, proprty, water, gas, state, electricity, (err) => {
    if (err) {
      console.error(err);
      res.send(JSON.stringify({
        status: '102',
        msg: '错误',
      }));
      return;
    }

    res.send(JSON.stringify({
      status: '200',
      msg: '成功',
      //userCount: count
    }))
  })
})

router.post('/update', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  chargeInfoData.upadateone(req.body.id,req.body.Proprty_fees,req.body.Water_fees,req.body.Gas_fees,req.body.Charge_state,req.body.Electricity_fees, (err) =>{
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
  const id = req.body.charge_id;
  chargeInfoData.deleteone(id, (err) => {
    if (err) {
      console.error(err);
      res.send(JSON.stringify({
        status: '102',
        msg: '错误',
      }));
      return;
    }

    res.send(JSON.stringify({
      status: '200',
      msg: '成功',
      //useriCount: count
    }))
  })
})

//获取总数量
router.get('/chargecount', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  chargeInfoData.getCount((err, count) => {
    if (err) {
      console.error(err);
      res.send(JSON.stringify({
        status: '102',
        msg: '错误',
      }));
      return;
    }

    res.send(JSON.stringify({
      status: '200',
      msg: '成功',
      userCount: count
    }))
  })
})

module.exports = router;
