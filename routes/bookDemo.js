const express = require('express');
const Booking = require('../models/Booking'); // Import the Booking model

const router = express.Router();

router.post('/', async (req, res) => { 
    try {
        const { name, email, phone, language } = req.body;
    
        // Validate required fields
        if (!name || !email || !phone || !language) {
            return res.status(400).json({ message: 'Please fill in all required fields.' });
        }
    
        // Check for existing booking with the same email
        const existingBooking = await Booking.findOne({ email });
        if (existingBooking) {
            return res.status(409).json({ message: 'Email already exists for a booking.' });
        }
    
        // Create a new booking
        const booking = new Booking({ name, email, phone, language });
        await booking.save();
    
        res.status(201).json({ message: 'Booking successful!' });
    } catch (err) {
        console.error('Error creating booking:', err);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

module.exports = router;
