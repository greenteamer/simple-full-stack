const fs = require('fs');
const path = require('path');

const fileName = 'products.json';
console.log(path.resolve(__dirname, fileName));

module.exports = function(app, db) {
  app.get('/products', (req, res) => {
    fs.readFile(path.resolve(__dirname, fileName), 'utf8', function(err, json) {
      if (!err) {
        const products = JSON.parse(json);
        res.send(products);
      } else console.log(err);
    });
  });
  app.post('/products', (req, res) => {
    console.log(req.body);
    res.send('Hello Product');
  });
};
