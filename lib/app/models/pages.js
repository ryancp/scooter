var pages = function(model, callback) {
	var query = model.query('pages').sort_by(['display_order', 'asc']);

	model.fetch(query, function(err, pages) {
		// TODO: set this up as a refList
		var pages_obj = pages.get();
		var pages_array = [];

		for (var key in pages_obj) {
			pages_array.push(pages_obj[key]);
		}

		return callback(null, pages_array);
	});
};

module.exports.pages = pages;