var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/submit-form', function(req, res) {
  const senderName = req.body.senderName;
  const message = req.body.message;
  let content = `Sent by ${senderName}
  Message : ${message}`;
  fs.writeFile(path.join(__dirname, '../message.txt'), content, function(err){
    if(err){
      console.error(err);
      return;
    }
    res.render('submitted');
  })
})

module.exports = router;
