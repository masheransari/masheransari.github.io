const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (if needed)
app.use(express.static('public'));

// Callback route to handle POST from Apple Sign-In
app.post('/callback', (req, res) => {
    // Handle the received POST data (code, state, etc.)
    const { code, state, error } = req.body;

    if (error) {
        console.log('Error during authentication:', error);
        res.status(400).send('Error during authentication');
    } else {
        console.log('Authentication code:', code);
        console.log('State:', state);

        // You can now exchange the code for a token, store it, etc.
        // For now, let's just send a success response
        res.send('Authentication successful');
    }
});

// Set up a simple route for the homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Apple Sign-In Demo</h1>');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
