const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensure unique email for bookings
  },
  phone: {
    type: String,
    required: true
  },
  language: {
    type: String,
    enum: ['english', 'hindi'], // Allowed language options
    required: true
  }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
