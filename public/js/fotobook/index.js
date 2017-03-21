var yo = require('yo-yo');

module.exports = function(pic){
	return yo`<div class="box-img">
				<img src="${pic.url}" width="100%">
			</div>`
}