const Trip = require('../model/trip');
const express = require('express');
const app = express();

// Get all items
app.get('/items', async (req, res) => {
  try {
    const items = await Trip.find(); // Use Trip.find() instead of Item.find()
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
