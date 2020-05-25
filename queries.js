const Pool = require('pg').Pool
const pool = new Pool({
    Product: 'hang',
    host: 'localhost',
    database: 'project',
    password: '1',
    port: 5432,
})

// SELECT all products.
const getProducts = async function (request, response) {

    var data = {
        listBrand: [],
        detail: [],
        url: []
    }
    try {
        // get list of product
        var t = await pool.query('SELECT * FROM Product ORDER BY IdProduct ASC')
        data.detail = t.rows
        // get url img
        t = await pool.query('SELECT * FROM urlImage')
        getUniqueUrl(data.url, t.rows)
        // get list of brand
        t = await pool.query('select Brand from Product group by Brand order by Brand asc ')
        for (i of t.rows) {
            data.listBrand.push(i.brand)
        }
        response.status(200).json(data)
    }
    catch (e) {
        response.status(400).send({ e })
    }
}


//  Get a single Product by id, use WHERE to check
const getProductById = async function (request, response) {
    const id = request.params.id
    var data = {
        detail: [],
        qty: [],
        specifications: {},
        url: []
    }
    try {
        // get detail of product
        var t = await pool.query('SELECT Product.*, DetailProduct.* FROM DetailProduct natural join Product WHERE IdProduct = $1', [id])
        data.detail = t.rows[0]
        // get specification
        t = await pool.query('select * from specifications where IdProduct = $1', [id])
        data.specifications = t.rows[0]
        // get url img
        t = await pool.query('Select urlImage from urlImage where IdProduct = $1', [id])
        for (i of t.rows) {
            data.url.push(i.urlimage)
        }
        // get quantity of color
        t = await pool.query('select * from color where IdProduct = $1', [id])
        data.qty = t.rows
        response.status(200).send(data)
    }
    catch (e) {
        response.status(400)
    }
}

//  Get list Product by brand, use WHERE to check
const getProductByBrand = (request, response) => {
    const Brand = request.params.brandName
    var res = []

    pool.query('SELECT Product.* , urlImage.urlImage from Product natural join urlImage WHERE Brand = $1', [Brand], (error, results) => {
        if (error) {
            response.status(500).send({ error })
        }
        getUniqueUrl(res, results.rows)
        response.status(200).json(res)
    })
}

function getUniqueUrl(res, listUrl) {
    var id = []
    for (i of listUrl) {
        var t = parseInt(i.idproduct)
        if (!id[t]) {
            res.push(i)
            id[t] = 1
        }
    }
}
// Create an order -- body: 
var IdOrder = 0;
const createNewOrder = async function (req, res) {
    const { receiver, phone, address, cost, items } = req.body
    try {
        // insert new order
        var t = await pool.query('INSERT INTO Orders (Receiver, Phone, Address,TotalCost, Day) VALUES ($1, $2, $3, $4, CURRENT_DATE)', [receiver, phone, address, cost])
        // get id of order
        t = await pool.query('Select IdOrder from Orders where Receiver = $1 and TotalCost = $2', [receiver, cost])
        IdOrder = t.rows[0].idorder
        // add items to order
        for (i of items) {
            await pool.query('Insert into DetailOrder values ($1, $2, $3, $4)', [IdOrder, i.IdProduct, i.color, i.quantity])
        }
        res.status(201).send("Order created!")
    }
    catch (e) {
        console.log(e)
    }
}

// get statistic for admin 
const getStatistic = async function (request, response) {
    var data = {
        today: {
            nOrder: null,
            nProduct: null,
            nMoney: null
        },
        overTime: {
            allOrder: null,
            sold: null,
            inStock: null,
            inCome: null
        }
    }

    try {
        // over time
        var t = await pool.query('select * from Orders group by IdOrder, Day order by Day')
        data.overTime.allOrder = t.rows
        t = await pool.query('select extract(month from Day) as Month, Sum(TotalCost) as Total from Orders group by extract(month from Day) ')
        data.overTime.inCome = t.rows
        t = await pool.query('select NameProduct, sum(Quantity) as "InStock" from Product natural join Color group by IdProduct')
        data.overTime.inStock = t.rows
        t = await pool.query('select NameProduct, sum(Quantity) as "Sold" from DetailOrder natural join Product group by  NameProduct')
        data.overTime.sold = t.rows
        // today
        t = await pool.query('select count(IdOrder) as nOrder from Orders where Day = current_date')
        data.today.nOrder = t.rows[0].norder
        t = await pool.query('select sum(Quantity) as nProduct from DetailOrder where IdOrder in ( select idorder from orders where Day = current_date)')
        data.today.nProduct = t.rows[0].nproduct
        t = await pool.query('select sum(TotalCost) as nMoney from Orders where Day = current_date')
        data.today.nMoney = t.rows[0].nmoney
        response.status(200).send(data)
    }
    catch (e) {
        console.log(e)
    }
}

// remove items from cash -- body: orderID, productID, quantity, color
const deleteItem = (req, res) => {
    const order = req.body
    pool.query('DELETE FROM order WHERE id = $1', [order.id], [order.productID], [order.quantity], [order.color], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200)
    })
}

// create a new Product, extract from req, use INSERT
const createProduct = (request, response) => {
    const { name, email } = request.body

    pool.query('INSERT INTO products (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Product added with ID: ${result.insertId}`)
    })
}

// Update data for a existing Product, use UPDATE
const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE products SET name = $1, email = $2 WHERE id = $3', [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Product modified with ID: ${id}`)
        }
    )
}

// DELETE Product by id
const deleteProduct = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Product deleted with ID: ${id}`)
    })
}

// export to access these functions from index.js
module.exports = {
    getProducts,
    getProductById,
    getProductByBrand,
    createNewOrder,
    getStatistic,
    deleteItem,
    createProduct,
    updateProduct,
    deleteProduct
}