const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
        methods: ['GET', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (req, res) => {
    res.json({
        message: 'Backend is running',
        products: '/api/products',
    });
});

//products array
let products = [
    { id: 1, name: 'Product 1', description: 'description 1', price: 100, imageUrl: '' },
    { id: 2, name: 'Product 2', description: 'description 2', price: 200, imageUrl: '' },
    { id: 3, name: 'Product 3', description: 'description 3', price: 300, imageUrl: '' },
    { id: 4, name: 'Product 4', description: 'description 4', price: 150, imageUrl: '' },
    { id: 5, name: 'Product 5', description: 'description 5', price: 500, imageUrl: '' },
    { id: 6, name: 'Product 6', description: 'description 6', price: 50, imageUrl: '' },
];

//function to generate a url for getting a random image from picsum
const fetchImageUrl = () => {
    return `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`;
};

//implement the get api for getting products
app.get('/api/products', (req, res) => {
    for (const product of products) {
        if (!product.imageUrl) {
            product.imageUrl = fetchImageUrl();
        }
    }
    res.json(products.map((p) => ({ ...p })));
});

//implement the delete api for deleting a product by Id
app.delete('/api/products/:id', (req, res) => {
    const id = Number.parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        return res.status(400).json({ error: 'Invalid product id' });
    }
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }
    const [deleted] = products.splice(index, 1);
    res.json({ message: 'Product deleted', product: deleted });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
