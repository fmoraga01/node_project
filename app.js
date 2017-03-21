
var express = require(‘express’); 
var app = express.createServer(); 
var port = process.env.PORT || 3000;



//var express = require('express');

//var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));//asigno la carpeta para que sirve archivos estaticos en el servidor

app.get('/', function(req, res){
	res.render('index',{
		title: 'Bienvenido a mi sitio de test'
	})
});

app.get('/historia', function(req, res){
	res.render('index',{
		title: 'Historia'
	})
});

/*app.listen(3000, function(err){
	if(err) return console.log('hubo un error'), process.exit(1);

	console.log('App de prueba escuchando en el puerto 3000');
});*/

app.listen(port);