/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const d = (new Date()).toLocaleString();
  console.log(`******* ${d}`);
  return res.json(['😀', '😳', '🙄']);
});

router.post('/', (req, res) => {
  return res.send('POST Emojis HTTP method on user resource');
});

router.put('/', (req, res) => {
  return res.send('PUT Emojis HTTP method on user resource');
});

router.delete('/', (req, res) => {
  return res.send('DELETE Emojis HTTP method on user resource');
});

module.exports = router;
