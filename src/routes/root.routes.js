const express = require('express');
const controller = require('../controllers/root.controller');

const router = express.Router();

module.exports = (app) => {
    app.use('/', router);

    router.get('/', (req, res) => {
        controller.get()
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err));
    });
};
