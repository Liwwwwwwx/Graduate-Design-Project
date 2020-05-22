const ComplaintInfoData = require('../models/complaintInfo.js');
const db = require('../models/database.js');
var express = require('express');
var router = express.Router();

var complaintInfoData = new ComplaintInfoData();


router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Content-Type', 'text/plain; charset = "utf-8"');
  complaintInfoData.getComplaintInfo((err, results) => {
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
  const user_id = req.body.user_id,
        content = req.body.content,
        state = req.body.state,
        receiver = req.body.receiver;
  complaintInfoData.insertOne(user_id, content, state, receiver, (err) => {
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

router.post('/update', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  complaintInfoData.upadateone(req.body.id,req.body.content,req.body.state,req.body.receiver, (err) =>{
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
  const id = req.body.Complaint_id;
  complaintInfoData.deleteone(id, (err) =>{
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
router.get('/complaintcount', (req,res) =>{
  res.header('Access-Control-Allow-Origin','*');
  complaintInfoData.getCount((err, count)=>{
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

module.exports = router;
