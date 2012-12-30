var users = function(model, callback) {
	var query = model.query('users').all();

	model.fetch(query, function(err, users) {
		// user_ids in the ref_list are hardcoded for now, need to make them dynamic
		var ref_list = ["1", "2"];

		model.set('_users_ref_list', ref_list);
		model.refList('_users', users, '_users_ref_list');
		return callback(null);
	});
};

var user = function(model, callback, id) {
	var query = model.query('users').by_id(id);

	model.subscribe(query, function(err, users) {
		model.ref('_user', users);

		return callback(null);
	});
};

module.exports.users = users;
module.exports.user = user;