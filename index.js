var Dataz = require('dataz');

module.exports = function(opts) {
	return function(req, res, next) {
		res.locals.context = new Dataz(opts);
		next();
	};
};
