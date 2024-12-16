const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Your callback route for Apple Sign-In
app.post('/callback', (req, res) => {
  const { code, state, error } = req.body;

  if (error) {
    return res.status(400).json({ error: error });
  }

  // Process the code and state or whatever you need to do
  return res.status(200).json({ message: 'Callback received', code, state });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
