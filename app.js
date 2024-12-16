// Import the required modules
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();
const PORT = 3000; // Change the port if needed

// Middleware to serve static files (if any)
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Simple Node.js Website</title>
      </head>
      <body>
        <h1>Welcome to the Home Page</h1>
        <p><a href="/callback">Go to Callback Page</a></p>
      </body>
    </html>
  `);
});

// Callback route
app.get('/callback', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Callback Page</title>
      </head>
      <body>
        <h1>This is the Callback Page</h1>
        <p><a href="/">Go back to Home</a></p>
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
