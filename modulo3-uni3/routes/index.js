

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/pedidos', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var telefono = req.body.telefono;
  var pizza = req.body.pizza;
  var cantidad = req.body.cantidad;
  var comentarios = req.body.comentarios;

  var obj = {
    from: process.env.SMTP_USERNAME,
    to: 'ardaiz.carolina1@gmail.com',
    subject: 'Pedido de pizza',
    html: nombre + ' ' + apellido + ' se contactó y quiere encargar una pizza. ' +
      'Teléfono: ' + telefono + '. Pizza: ' + pizza +
      '. Cantidad: ' + cantidad + '. Comentarios: ' + comentarios
  };

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
    }
  });

  try {
    var info = await transport.sendMail(obj);
    console.log('Mensaje enviado: %s', info.messageId);
    res.render('index', { message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.log(error);
    res.render('index', { message: 'No se pudo enviar el mensaje' });
  }
});

module.exports = router;
