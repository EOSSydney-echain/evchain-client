var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/maps', function (req, res, next) {
  res.render('maps', { title: 'Express' });
});

router.get('/scan', function (req, res, next) {
  res.render('scan', { title: 'Express' });
});

router.get('/accept', function (req, res, next) {
  res.render('accept', { title: 'Express' });
});

router.get('/charge', function (req, res, next) {
  res.render("charge");
});

router.get('/share', function (req, res, next) {
  res.render('share');
});
router.get('/sharing', function (req, res, next) {
  res.render('sharing');
});

router.get('/panel', function (req, res, next) {
  res.render("panel");
});

module.exports = router;
