const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const db = require('./queries')
app.get('/products', db.getProducts)
app.get('/products/:id', db.getProductById)
app.get('/products/brand/:brandName', db.getProductByBrand)
app.post('/newOrder', db.createNewOrder)
app.post('/deleteItem',db.createNewOrder)

app.post('/products', db.createProduct)
app.put('/products/:id', db.updateProduct)
app.delete('/products/:id', db.deleteProduct)

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})