const UserInfoData = require('../models/userInfo.js');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var userInfoData = new UserInfoData();

router.get('/', (req, res) =>{
  res.header('Access-')
})

router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset = "utf-8"');
  userInfoData.getUserInfo((err, results) => {
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

module.exports = router;
