const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json());

// app.use(function (error, req, res, next) {
//   if(error instanceof SyntaxError){ //Handle SyntaxError here.
//     return res.status(500).send({data : "Invalid data"});
//   } else {
//     next();
//   }
// });
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html')
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
// app.post('/deleteItem',db.deleteItem)

// app.post('/products', db.createProduct)
// app.put('/products/:id', db.updateProduct)
// app.delete('/products/:id', db.deleteProduct)