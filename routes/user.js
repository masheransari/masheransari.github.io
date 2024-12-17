const express = require('express');
const router = express.Router();

// Endpoint "/user" is gonna create a user
router.get('/', (req, res) => {
  res.send('user selected');
}
);
router.post('/', (req, res) => {
    res.send('user create');
  }
);
router.delete('/', (req, res) => {
  res.send('user deleted');
}
);
module.exports = router;