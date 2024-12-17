require('dotenv').config();
const express = require('express');
const app = express();
const serverless = require('serverless-http'); // Import serverless-http
const userRouter = require('./routes/user');
const callbackRouter = require('./routes/callback');

// Middleware for all routes
app.use('/', (req, res, next) => {
    console.log('middleware 1');
    next();
});

// Specific route for /user
app.use('/user', userRouter);

// Specific route for /callback
app.use('/callback', (req, res, next) => {
    console.log('middleware for /callback route');
    next();
});
app.use('/callback', callbackRouter);  // This handles /callback route

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Handle all unimplemented routes (404 handler)
app.use((req, res) => {
    res.status(404).json({
        message: 'This URL was not implemented in this API',
    });
});

// Use serverless-http to wrap your express app
module.exports.handler = serverless(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
