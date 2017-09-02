const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8000
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/static', express.static('dist'))

require('./routes')(app, {})

app.use((req, res) => {
  return res.end(renderHTML())
})

const assetUrl = 'http://localhost:8000'

function renderHTML() {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Kaspersky React</title>
          <link rel="stylesheet" href="${assetUrl}/static/styles.css">
      </head>
      <body>
        <div id="root"></div>
        <script type="application/javascript" src="${assetUrl}/static/bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(port, () => {
  console.log('Node process port: ', port)
})
