const express = require('express')
const formidable = require('formidable')
const fs = require('fs')
const path = require('path')
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
    initialData.forEach(function(product, index) {
      if (product.id === +req.params.productId) {
        initialData[index] = req.body
      }
    })
    res.send(req.body)
  })
  router.post('/upload', function(req, res) {
    const form = new formidable.IncomingForm()
    form.parse(req, function(err, fields, files) {
      const oldpath = files.file.path
      const newpath = path.join(__dirname, '../../dist', files.file.name)
      fs.rename(oldpath, newpath, function(err) {
        files.file.path = 'http://localhost:8000/static/' + files.file.name
        res.send(files)
        if (err) throw err
      })
    })
  })
  return router
}

module.exports = createRouter
