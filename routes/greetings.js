var express = require('express');
var router = express.Router();

/* GET greetings listing. */
router.get('/', function(req, res, next) {
  res.render('saludo', {
  	pTitulo: 'Express',
  	pContenido: 'Aplicación con Express'
  }) ;
});

module.exports = router;