const Pool = require('pg').Pool
const pool = new Pool({
    Product: 'hang',
    host: 'localhost',
    database: 'project',
    password: '1',
    port: 5432,
})

// SELECT all products.
const getProducts = (request, response) => {

    var data = {
        detail: [],
        url: []
    }
    pool.query('SELECT * FROM Product ORDER BY IdProduct ASC', (err, results) => {
        if (err) {
            response.status(500).send({ err })
        }
        data.detail = results.rows
        pool.query('SELECT * FROM urlImage', (e, r) => {
            if (e) {
                response.status(500).send({ e })
            }
            data.url = r.rows
            response.status(200).json(data)
        })
    })
}

//  Get a single Product by id, use WHERE to check
const getProductById = (request, response) => {
    const id = request.params.id
    pool.query('SELECT Product.*, DetailProduct.* FROM DetailProduct natural join Product WHERE IdProduct = $1', [id],
        (error, results) => {
            if (error) {
                response.status(500).send({ error })
            }
            var data = results.rows[0]
            data.qty = []
            data.specifications = {}

            getImg(id).then(url => {
                data.url = url
                getSpec(id).then(res => {
                    data.specifications = res.rows[0]
                    getQty(id).then(result => {
                        data.qty = result.rows
                        response.status(200).send(data)
                    })
                })
            }).catch((err) => {
                console.log(err)
            })
        })
}

function getSpec(id) {
    return new Promise(function (resolve, reject) {
        pool.query('select * from specifications where IdProduct = $1', [id], (err, res) => {
            resolve(res)
        })
    })
}

function getQty(id) {
    return new Promise(function (resolve, reject) {
        pool.query('select * from color where IdProduct = $1', [id], (err, result) => {
            resolve(result)
        })
    })
}

function getImg(id) {
    return new Promise(function (resolve, reject) {
        pool.query('Select urlImage from urlImage where IdProduct = $1', [id], (err, res) => {
            var url = []
            for (i of res.rows) {
                url.push(i.urlimage)
            }
            if (url != null) {
                resolve(url)
            } else {
                reject("no data");
            }
        })
    })
}

//  Get list Product by brand, use WHERE to check
const getProductByBrand = (request, response) => {
    const Brand = request.params.brandName
    var id = [], res = []

    pool.query('SELECT Product.* , urlImage.urlImage from Product natural join urlImage WHERE Brand = $1', [Brand], (error, results) => {
        if (error) {
            response.status(500).send({ error })
        }
        for (i of results.rows) {
            var t = parseInt(i.idproduct)
            if (!id[t]) {
                res.push(i)
                id[t] = 1
            }
        }
        response.status(200).json(res)
    })
}

// Create an order -- body: 
var IdOrder = 0;
const createNewOrder = (req, res) => {
    const { receiver, phone, address, cost, items } = req.body

    pool.query('INSERT INTO Orders (Receiver, Phone, Address,TotalCost, Day) VALUES ($1, $2, $3, $4, CURRENT_DATE)', [receiver, phone, address, cost], (error, result) => {
        if (error) {
            throw error
        }
        getIdOrder(receiver, cost).then(id => {
            IdOrder = id
            for (i of items) {
                addItem(i, IdOrder)
            }
        }).catch((err) => {
            console.log(err)
        })
        res.status(201).send("Order created!")
    })
}

// get IdOrder
function getIdOrder(name, cost) {
    return new Promise(function (resolve, reject) {
        pool.query('Select IdOrder from Orders where Receiver = $1 and TotalCost = $2', [name, cost], (err, res) => {
            resolve(res.rows[0].idorder)
        })
    })
}

function addItem(item, id) {
    return new Promise(function (resolve, reject) {
        pool.query('Insert into DetailOrder value ($1, $2, $3)', [id, item.IdProduct, item.quantity], (err, res) => {
            if (error) {
                throw error
            }
            console.log("Add ", item.quantity, " ", item.IdProduct)
        })
    })
}
// add items to cash -- body: orderID, productID, quantity, color
// const addItem = (req, res) => {
//     const items = req.body

//     // var lists = [{ IdOrder: '1', IdProduct: '1', Quantity: 1 }, { IdOrder: '1', IdProduct: '2', Quantity: 2 }, { IdOrder: '1', IdProduct: '3', Quantity: 3 }];
//     // var sql = "SELECT format ('INSERT INTO DetailOrder VALUES(%L)',items)"


//     pool.query('SELECT format (`INSERT INTO DetailOrder VALUES(%L)`,items')
//         .then(data => {
//             response.status(200).send("Insert successfully!")
//         })
//         .catch(error => {
//             response.status(500).send({ error })
//         });


//     // pool.query('INSERT INTO DetailOrder VALUES ($1,$2,$3,$4)', Inserts('${IdOrder}, ${IdProduct},${Quantity}', lists))
//     //     .then(data => {
//     //         response.status(200).send("Insert successfully!")
//     //     })
//     //     .catch(error => {
//     //         response.status(500).send({ err })
//     //     });
//     // pool.query('insert to DetailOrder value($1,$2,$3,$4)', [order.id], [order.productID], [order.quantity], [order.color], (err, results) => {
//     //     if (err) {
//     //         response.status(500).send({ err })
//     //     }
//     //     response.status(200)
//     // })
// }

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
    addItem,
    deleteItem,
    createProduct,
    updateProduct,
    deleteProduct
}