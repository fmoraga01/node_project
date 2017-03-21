var yo = require('yo-yo');
var moment = require('moment');//plugin para capturar la fecha

module.exports = function pictureCard(pic){
	var el;

	function render(picture){
		return yo`<div class="card-box">
					<div class="date">
						<p>Proyecto publicado <span>${moment(picture.createdAt).fromNow()}</span></p>
					</div>
					<div class="box-img">
						<img src="${picture.url}" width="100%">
					</div>
					<div class="box-descripcion">
						<h1>${picture.nomProyecto}</h1>
						<p>${picture.descripcionProyecto}</p>
					</div>
					<div class="box-like ${picture.liked ? 'liked' : ''}">
						<a href="#" class="corazon" onclick=${like.bind(null, true)}></a>
						<a href="#" class="corazon-red" onclick=${like.bind(null, false)}></a>
						<span>${picture.likes} Me gusta</span>
					</div>
				</div>`
	}
	//function para darle like a los proyectos
	function like(liked){
		pic.liked = liked;
		pic.likes += liked ? 1 : -1;//condicional abreviada 
		var newEl = render(pic);
		yo.update(el, newEl);
		return false;
	}

	el = render(pic);
	return el;

} 
