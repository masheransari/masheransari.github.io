const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Simple Node.js Website</title>
      </head>
      <body>
        <h1>Welcome to the Home Page</h1>
        <p><a href="/.netlify/functions/callback">Go to Callback Page</a></p>
      </body>
    </html>
  `);
});

app.use('/', router);

module.exports.handler = serverless(app);
