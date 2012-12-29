var async = require('async'),
	pages_model = require('../models/pages'),
	users_model = require('../models/users');

var render = function(page, model, title, data) {
	var tasks = {
		pages: function(callback) {
			callback = pages_model.pages(model, callback);
		}
		,
		users: function(callback) {
			callback = users_model.users(model, callback);
		}
	};

	var done_callback = function(err, result) {
		var ctx = {
			data: data,
			pages: result.pages,
			activeUrl: page.params.url
		};

		page.render(title, ctx);
	};

	async.parallel(tasks, done_callback);

};

module.exports.render = render;