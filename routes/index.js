var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('maps', { title: 'Express' });
});

router.get('/scan', function(req, res, next) {
  res.render('scan', { title: 'Express' });
});

module.exports = router;
