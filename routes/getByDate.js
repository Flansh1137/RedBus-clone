const Trip = require('../model/trip');
const express = require('express');
const app = express();

// Create a new item
app.get('/date', async (req, res) => {
  try {
    const {
      date
    } = req.query;

    const filter = {};
    if (date) {
      filter.date = date;
    }
    
    const data = await Trip.find(filter);
    if (data.length === 0 ) {
      res.status(200).json({data:null,message:err.message});
    }
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
module.exports = app;