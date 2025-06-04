require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'));

const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
