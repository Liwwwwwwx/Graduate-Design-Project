var express = require('express');
var router = express.Router();
var LoginData = require('../models/loginData.js');
var loginData = new LoginData();
var db = require('../models/database.js');

router.get('/', function (req, res) {
    loginData.getAll((err, datas) =>{
        if (err) {
            console.error(err);
        }else {
            res.send(datas);
        }
    });
});

router.post('/login', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    var name = req.body.name;
    var psw = req.body.psw;
    loginData.getOne(name, (err, data) =>{
        let password = '' + data[0].password;
        console.log(password);
        if (err) {
            console.error(err);
            res.send(false);
        }else {
            if( psw !== password){
                console.log(data[0].password);
                res.send(fasle);
            } else {
                res.send(true);
            }
        }
    })
})

router.post('/land', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    var name = req.body.name;
    var psw = req.body.psw;
    console.log(req.body);
    loginData.getOne(name, (err, data) => {
      console.log(data); 
      if (err) {
        console.log(err);
        res.send(JSON.stringify({
          isLogin: false,
          msg: '错误',
          status: '101'
        }));
      }
      else if (data.length === 0) {
        console.log(1)
        res.send(JSON.stringify({
          isLogin:false,
          status:'400',
          msg:'该用户不存在'
        }))
        return ;
      }
      else {
       let password = '' + data[0].psw;
       if (psw !== password) {
          res.send(JSON.stringify({
            isLogin: false,
            status: '400',
            msg: '用户明密码错误'
          }))
        } else {
          res.send(JSON.stringify({
            data: {
              username: name,
              password: psw
            },
            isLogin: true,
            status: '200',
            msg: '登陆成功'
          }))
        }
  
      }
    })
  })

  module.exports = router;
