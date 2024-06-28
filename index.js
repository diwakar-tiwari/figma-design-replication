require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const path = require('path');

// Route handler from routes/bookDemo.js
const bookDemoRoute = require('./routes/bookDemo.js');
const errorHandler = require('./utils/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Use express.json() to parse incoming JSON data
// Middleware
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Mount the route handler
app.use('/book-demo', bookDemoRoute);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
