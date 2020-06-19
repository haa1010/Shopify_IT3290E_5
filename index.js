const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8080

app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.use(function (error, req, res, next) {
//   if(error instanceof SyntaxError){ //Handle SyntaxError here.
//     return res.status(500).send({data : "Invalid data"});
//   } else {
//     next();
//   }
// });
app.get('/', (req, res) => {
  res.send('Hiiii. You go to wrong path! Try localhost:8080/admin')
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

const db = require('./queries')

app.get('/products', db.getProducts)
app.get('/products/:id', db.getProductById)
app.get('/products/brand/:brandName', db.getProductByBrand)
app.post('/newOrder', db.createNewOrder)
app.get('/admin', db.getStatistic)
app.get('/admin/orders/:id', db.getOrderById)
app.put('/admin/update', db.updateProduct)
app.post('/admin/create', db.createProduct)