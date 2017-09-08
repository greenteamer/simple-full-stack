const express = require('express')
const router = express.Router()

const createRouter = initialData => {
  router.get('/', function(req, res) {
    res.send('Birds home page')
  })
  router.get('/product', function(req, res) {
    res.send(initialData)
  })
  router.get('/product/:productId', function(req, res) {
    const product = initialData.find(p => p.id === +req.params.productId)
    res.send(product)
  })
  router.post('/product/:productId', function(req, res) {
    res.send(req.body)
  })
  return router
}

module.exports = createRouter
