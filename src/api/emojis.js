/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const d = (new Date()).toLocaleString();
  console.log(`******* ${d}`);
  res.json(['😀', '😳', '🙄']);
});

module.exports = router;
