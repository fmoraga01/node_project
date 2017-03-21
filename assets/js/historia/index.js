var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');


page('/historia', function(ctx, next){
	title('Historia');
	var contenido = document.getElementById('contenido');

	empty(contenido).appendChild(template); 
})