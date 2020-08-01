let users = {
    1: {
    id: '1',
    username: 'Robin Wieruch',
    },
    2: {
    id: '2',
    username: 'Dave Davids',
    }
};


/* eslint-disable no-console */
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.get('/', (req, res) => {
  return res.json(users);
});

router.get('/:id', (req, res) => {
    return res.json(users[req.params.id]);
});

router.post('/', (req, res) => {
    const id = uuidv4();
    const user = {
        id,
        text: req.body.text,
        count: req.body.count,
        datetime: req.body.datetime
    };
    console.log(req.body);
    users[id] = user;
    return res.json(user);
    // return res.send('POST Emojis HTTP method on user resource');
});

router.put('/', (req, res) => {
    return res.send('PUT Emojis HTTP method on user resource');
});

router.delete('/', (req, res) => {
    return res.send('DELETE Emojis HTTP method on user resource');
});

module.exports = router;
