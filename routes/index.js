var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/uploadFile', function(req, res, next){
   res.render('fileUpload'); 
});

router.post('/uploadFile', function(req, res, next){
   // File has been uploaded
   console.log(req.files[0].originalname)
   res.render('test'); 
});

module.exports = router;
