var yo = require('yo-yo');
var historia = require(../historia);

var contenidoContacto = yo`<h1>Acá va el contenido de contacto...</h1>`

module.exports = historia(contenidoContacto);