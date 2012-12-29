var async = require('async'),
	app = require('../index')
	render_helper = require('../helpers/render');

app.get('/', function(page, model) {
	render_helper.render(page, model, 'home');
});