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
        <p><a href="/callback">Go to Other Page</a></p>
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
