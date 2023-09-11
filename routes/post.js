const Trip = require('../model/trip');
const express = require('express');
const app = express();

// Create a new item
app.post('/items', async (req, res) => {
  try {
    const {
      date,
      from,
      to,
      busOwnerID,
      startTime,
      EndTime,
      category,
      SeatBooked,
      bus_no,
      animeties_list,
      busFare,
      busName
    } = req.body;

    // Use a different variable name for the Mongoose model
    const tripModel = new Trip({
      date,
      from,
      to,
      busOwnerID,
      startTime,
      EndTime,
      category,
      SeatBooked,
      bus_no,
      animeties_list,
      busFare,
      busName
    });

    const newItem = await tripModel.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = app;
