var express = require('express');
const req = require('express/lib/request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('hello');
});



router.get('/:num', function(req, res, next) {
    var num = req.params.num
    res.render('hello',{ hell: num});

  });
  
// router.post('/parser',function(req,res,next){
// res.send(req.body);

// });


  
module.exports = router;
