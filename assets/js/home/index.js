var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');



page('/', function(ctx, next){
	title('Bienvenido a mi sitio de test');
	var contenido = document.getElementById('contenido');

	var pictures =[
		{
			nomProyecto: 'Proyecto Uno',
			url: '../img/1.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 1',
			likes: 10,
			liked: true,
			createdAt: new Date()
		},
		{
			nomProyecto: 'Proyecto Dos',
			url: '../img/2.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 2',
			likes: 10,
			liked: false,
			createdAt: new Date()
		},
		{
			nomProyecto: 'Proyecto Tres',
			url: '../img/3.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 3',
			likes: 10,
			liked: false,
			createdAt: new Date()
		},
		{
			nomProyecto: 'Proyecto Cuatro',
			url: '../img/4.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 4',
			likes: 10,
			liked: true,
			createdAt: new Date()
		},{
			nomProyecto: 'Proyecto Cinco',
			url: '../img/1.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 5',
			likes: 10,
			liked: false,
			createdAt: new Date()
		},
		{
			nomProyecto: 'Proyecto Seis',
			url: '../img/2.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 6',
			likes: 10,
			liked: false,
			createdAt: new Date()
		},
		{
			nomProyecto: 'Proyecto Siete',
			url: '../img/3.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 7',
			likes: 10,
			liked: false,
			createdAt: new Date()
		},
		{
			nomProyecto: 'Proyecto Ocho',
			url: '../img/4.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 8',
			likes: 10,
			liked: false,
			createdAt: new Date()
		},{
			nomProyecto: 'Proyecto Nueve',
			url: '../img/1.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 9',
			likes: 10,
			liked: false,
			createdAt: new Date().setDate(new Date().getDate() - 10)
		},
		{
			nomProyecto: 'Proyecto Dies',
			url: '../img/2.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 10',
			likes: 10,
			liked: false,
			createdAt: new Date().setDate(new Date().getDate() - 20)
		},
		{
			nomProyecto: 'Proyecto Once',
			url: '../img/3.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 11',
			likes: 10,
			liked: false,
			createdAt: new Date().setDate(new Date().getDate() - 30)
		},
		{
			nomProyecto: 'Proyecto Doce',
			url: '../img/4.jpg',
			descripcionProyecto: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto 12',
			likes: 10,
			liked: false,
			createdAt: new Date().setDate(new Date().getDate() - 40)
		}
	]


	empty(contenido).appendChild(template(pictures)); 
})