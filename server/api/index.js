const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const fileName = 'products.json'

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
router.get('/', function(req, res) {
  res.send('Birds home page')
})
router.get('/products', function(req, res) {
  fs.readFile(path.resolve(__dirname, fileName), 'utf8', function(err, json) {
    if (!err) {
      const products = JSON.parse(json)
      res.send(products)
    } else console.log(err)
  })
})
router.get('/products/:productId', function(req, res) {
  fs.readFile(path.resolve(__dirname, fileName), 'utf8', function(err, json) {
    if (!err) {
      const products = JSON.parse(json)
      const product = products.find(p => p.id === +req.params.productId)
      res.send(product)
    } else console.log(err)
  })
})
router.post('/products', function(req, res) {
  console.log('params: ', req.body)
  res.send('post products')
})

module.exports = router
