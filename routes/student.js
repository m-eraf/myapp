var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//   res.send('eraf');
  console.log(req)
  res.json({name:"eraf"})
});
router.get('/:da-:ta', function(req, res, next) {
      console.log(req.params)
      res.json({name:req.params.da+","+req.params.ta+"="+req.params.da+req.params.ta})
});
router.get('/:da', function(req, res, next) {
  // console.log(req.params)
  res.send(req.params)
});
module.exports = router;
