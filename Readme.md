# UpTodd Web Application

## Table of Contents
- [Project Overview](#project-overview)
- [Backend](#backend)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
  - [Environment Variables](#environment-variables)
  - [Features](#features)
    - [Database Connection](#database-connection)
    - [Middleware](#middleware)
    - [Routes](#routes)
    - [Error Handling](#error-handling)
- [Frontend](#frontend)
  - [Static Files](#static-files)
  - [HTML Structure](#html-structure)
  - [CSS](#css)
  - [JavaScript](#javascript)

## Project Overview
UpTodd is a web application designed to help parents book demo sessions for their children. The application showcases real stories of children's growth and offers personalized learning programs.

## Backend

### Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- body-parser
- path

### Setup and Installation
1. Clone the repository.
   ```bash
   git clone <repository-url>

2. Install the dependencies.
    npm install

3. Create a .env file in the root directory and add the following environment variables:
    PORT=3000
    MONGODB_URI=<your-mongodb-uri>

## Environment Variables
- PORT: The port on which the server will run. Default is 3000.
- MONGODB_URI: The connection string for the MongoDB database.

# Features
- Database Connection
- Connects to a MongoDB database using Mongoose.
- Utilizes environment variables for configuration.
- Provides feedback on successful connection or errors

## Frontend

# Static Files
- All static files (HTML, CSS, JavaScript) are served from the public directory.

# HTML Structure
- Navigation Bar: Contains links to various sections and a button to book a demo session.
- Header Section: Displays a title and a subtitle.
- Kids Learning Section: Highlights various developmental milestones for children.
- Parents Section: Showcases testimonials from parents.
- Icons Section: Displays key statistics about the program.
- Carousel Section: Features success stories of children.
- CTA Section: Encourages users to start the program.
- Testimonial Section: Provides a brief testimonial.
- Footer: Contains links to company information, community resources, and program details.

# CSS
- The project uses style.css for general styling and temp.css for temporary or additional styles.

# JavaScript
- The project uses script.js for handling interactions like opening and closing the demo booking form.



