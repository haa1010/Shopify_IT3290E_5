const Pool = require('pg').Pool
const pool = new Pool({
    Product: 'hang',
    host: 'localhost',
    database: 'project',
    password: '1',
    port: 5432,
})

// SELECT all products and order by id.
const getProducts = (request, response) => {
    pool.query('SELECT * FROM Product ORDER BY IdProduct ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//  Get a single Product by id, use WHERE to check
const getProductById = (request, response) => {
    const id = request.params.id

    pool.query('SELECT Product.*, DetailProduct.* FROM DetailProduct natural join Product WHERE IdProduct = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

//  Get list Product by branch, use WHERE to check
const getProductByBranch = (request, response) => {
    const branch = request.params.branch

    pool.query('SELECT Product.*,DetailProduct.* FROM DetailProduct natural join Product WHERE branch = $1', [branch], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// Create an order -- body: productID, quantity, color
const createNewOrder = (req, res) => {
    const order = req.body
    pool.query('SELECT Product.*,DetailProduct.* FROM DetailProduct natural join Product WHERE IdProduct = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// add items to cash -- body: orderID, productID, quantity, color
const addItem = (req, res) => {
    const order = req.body
    pool.query('insert to order value($1,$2,$3,$4)', [order.id], [order.productID], [order.quantity], [order.color], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200)
    })
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
        'UPDATE products SET name = $1, email = $2 WHERE id = $3',
        [name, email, id],
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
    getProductByBranch,
    createNewOrder,
    addItem,
    deleteItem,
    createProduct,
    updateProduct,
    deleteProduct
}