const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ status: 'UP', on: new Date() })
});

module.exports = router;
