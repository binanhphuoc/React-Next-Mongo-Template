const express = require('express');
const _ = require('lodash');
const router = express.Router();
const cardPostController = require('../controllers/cardPost.controller');

router.get('/', (req, res) => {
    console.log('cardPosts');
    res.send('cardPosts');
});

router.get('/all', (req, res) => {
    cardPostController.getAll(req, res);
});

router.post('/makePost', (req, res) => {
    cardPostController.createOne(req, res);
});

router.post('/updatePosts', (req, res) => {
    cardPostController.updateALot(req, res);
});

module.exports = router;