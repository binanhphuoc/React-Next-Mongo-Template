const express = require('express');
const _ = require('lodash');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', (req, res) => {
    console.log('users');
    res.send('users');
});

router.get('/all', (req, res) => {
    userController.getAll(req, res);
});

router.post('/register', (req, res) => {
    userController.createOne(req, res);
});

module.exports = router;