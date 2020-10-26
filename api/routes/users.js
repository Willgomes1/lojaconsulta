var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/cadastro', function(req, res, next) {
  res.send('Tela de cadastro');
});


module.exports = router;
