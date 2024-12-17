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

// Callback route
app.post('/callback', (req, res) => {
  res.send(`
    <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Callback Page</title>
      <script>
        const params = new URLSearchParams(window.location.search);
        const authCode = params.get('code');
        const state = params.get('state');
        const error = params.get('error');
      
        window.onload = () => {
            if (authCode && state) {
                const redirectURL = \`karwa://auth?code=${authCode}&state=${state}\`;
                window.location.href = redirectURL;
            } else if (error) {
                const redirectURL = \`karwa://auth?error=${error}\`;
                window.location.href = redirectURL;
            } else {
                document.body.innerHTML = "No code or error received.";
            }
        };
      </script>
   </head>
   <body>
      <h1>Processing Callback...</h1>
   </body>
</html>  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
