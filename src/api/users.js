/* eslint-disable no-console */
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const mongo = require('../mongo');

const router = express.Router();

router.get('/', async (req, res) => {
    const query = {
        // id: 'c3478279-f6f4-49c7-a131-382607d3641d'
        // age: 20
    };
    const documents = await mongo.readAll(query);
    return res.json(documents);
});

// this has to be in front of param query in order to intercept the segment 'count'
router.get('/count', async (req, res) => {
    const query = {
        // age: {
        //     $lte: 79
        // }
    };
    const count = await mongo.count(query);
    return res.json({
        count
    });
});

router.get('/:id', async (req, res) => {
    const query = {
        id: req.params.id
    };
    const document = await mongo.readOne(query);
    return res.json(document);
});

router.post('/', async (req, res) => {
    const createtime = new Date();
    const id = uuidv4();
    const user = {
        id,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        createtime
    };
    await mongo.create(user);
    return res.json(user);
});

router.put('/:id', async (req, res) => {
    const modifytime = new Date();
    const query = {
        id: req.params.id
    };
    const user = {
        $set: {
            ...req.body,
            modifytime
        }
    };
    await mongo.update(query, user);
    return res.json(user);
});

router.delete('/:id', async (req, res) => {
    const query = {
        id: req.params.id
    };
    await mongo.deleteOne(query);
    return res.json(query);
});

module.exports = router;
