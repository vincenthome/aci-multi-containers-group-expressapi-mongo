const express = require('express');
const request = require('request');

const emojis = require('./emojis');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});


router.get('/private', (_req, res) => {
  request('http://localhost:5000', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // eslint-disable-next-line no-console
      console.log(`calling private success. message: ${body}`);
    } else {
      // eslint-disable-next-line no-console
      console.log('Error');
    }
  });
  res.json({
    message: 'API private - 👋🌎🌍🌏'
  });
});


router.use('/emojis', emojis);

module.exports = router;
