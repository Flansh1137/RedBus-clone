const express = require('express');
const mongoose = require('mongoose');
const post = require('./routes/post');
const get = require('./routes/get');
const getByQuerys = require('./routes/getByQuerys');
const getByDate = require('./routes/getByDate');
const booking = require('./routes/booking');
// Initialize Express
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://flansh:flansh.123@reserve.kxkl7mx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to parse JSON requests
app.use(express.json());

// Use the 'post' router for the '/api' path
app.use('/api', post);
app.use('/api', get);
app.use('/api', getByQuerys);
app.use('/api', getByDate);
app.use('/api', booking);//both get and post

// API endpoints

// Create a new item
// app.post('/api/items', async (req, res) => {
//   try {
//     const newItem = new Item(req.body);
//     await newItem.save();
//     res.status(201).json(newItem);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // Get all items
// app.get('/api/items', async (req, res) => {
//   try {
//     const items = await Item.find().sort("-date");
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
