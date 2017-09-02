const productRoutes = require('./route_products');
module.exports = function(app, db) {
  productRoutes(app, db);
};
