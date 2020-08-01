/* eslint-disable prefer-template */
/* eslint-disable no-console */
const express = require('express');
const request = require('request');

const emojis = require('./emojis');
const users = require('./users');

const router = express.Router();

router.get('/', (req, res) => {
  const d = (new Date()).toLocaleString();
  console.log(`******* ${d}`);
  return res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.post('/', (req, res) => {
  return res.send('Received a API POST HTTP method');
});

router.put('/:id', (req, res) => {
  return res.send(`Received a API PUT HTTP method on ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  return res.send(`Received a API DELETE HTTP method on ${req.params.id}`);
});


// calling a different server
router.get('/private', (_req, res) => {
  const d = (new Date()).toLocaleString();
  console.log(`******* ${d}`);
  request('http://localhost:5000', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      // eslint-disable-next-line no-console
      console.log(`calling private success. message: ${body}`);
    } else {
      // eslint-disable-next-line no-console
      console.log('Error');
    }
  });
  return res.json({
    message: 'API private - 👋🌎🌍🌏'
  });
});


router.use('/emojis', emojis);

router.use('/users', users);

module.exports = router;
