const Trip = require('../model/trip');
const express = require('express');
const app = express();

// Create a new item for booking
app.post('/bookingPost', async (req, res) => {
  try {
    const {
      userName,
      phoneNo,
      age,
      gender
    } = req.body;

    // Create a new booking instance
    const booking = new Trip({
      userName,
      phoneNo,
      age,
      gender
    });

    // Save the booking to the database
    const savedBooking = await booking.save();

    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Retrieve bookings
app.get('/bookingGet', async (req, res) => {
  try {
    // Extract query parameters if needed
    const { userName, phoneNo, age, gender } = req.query;

    // Create a filter object based on query parameters
    const filter = {};
    if (userName) {
      filter.userName = userName;
    }
    if (phoneNo) {
      filter.phoneNo = phoneNo;
    }
    if (age) {
      filter.age = age;
    }
    if (gender) {
      filter.gender = gender;
    }

    // Find bookings that match the filter
    const bookings = await Trip.find(filter);

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
