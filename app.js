const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 1010;


app.get("/", (req, res) =>{
    const id = req.query.id;
    const username = req.query.username;

    res.send(`User id: ${id}. Username is ${username}`);

});

app.get("/products/:id", (req, res) => {
    const product_id = req.params.id;
    const products = [
        {"id": 1, "name": "Product A"},
        {"id": 2, "name": "Product B"},
        {"id": 3, "name": "Product C"},
    ];

    //just like a map method; mapping function to find product by ID
    const product = products.find(products => products.id === parseInt(product_id)); // === means comparinmg the value and also the data type

    //use dot notation to access product fields and display
    res.send(`Product: ${product.id}, Name: ${product.name}`);
});

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
});

