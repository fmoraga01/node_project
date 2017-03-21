var yo = require('yo-yo');

module.exports = function layout(content){
	return  yo`<div>
					<div class="contenido-layout">
						${content}
					</div>
				</div>`;
}
