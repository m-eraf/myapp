var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "data"
});

router.get('/', function(req, res, next) {
    con.connect(function(err) {
        if (err) console.log("err");
        console.log("Connected!");
      });
    res.render('index')
});

router.post('/about', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `form_details` (`name`, `country`, `age`) \
    VALUES ('"+req.body.name+"', '"+req.body.country+"', '"+req.body.age+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

      });

      });
res.json({"Name":req.body})
res.send('data submitted')
});

module.exports = router;