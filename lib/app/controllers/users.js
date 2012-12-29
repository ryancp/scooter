var async = require('async'),
	app = require('../index'),
	render_helper = require('../helpers/render'),
	users_model = require('../models/users');

app.get('/users', function(page, model) {
	render_helper.render(page, model, 'users');
});

app.get('/users/:user_id', function(page, model, params) {
	var user_id = params.user_id;

	async.waterfall([
		function(callback){
			callback(null, 'one', 'two');
		},
		function(arg1, arg2, callback){
			callback(null, 'three');
		},
		function(arg1, callback) {
			// arg1 now equals 'three'
			callback = users_model.user(model, callback, user_id);
		}],
		function (err, result) {
			render_helper.render(page, model, 'user');
	});
});