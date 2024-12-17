const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    // Use req.query to get the query parameters
    const { code, state, error } = req.query;

    const htmlResponse = `
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
                        const redirectURL = \`karwa://auth?code=\${authCode}&state=\${state}\`;
                        window.location.href = redirectURL;
                    } else if (error) {
                        const redirectURL = \`karwa://auth?error=\${error}\`;
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
      </html>
    `;

    // Send the HTML response back to the client
    res.send(htmlResponse);
});

module.exports = router;
