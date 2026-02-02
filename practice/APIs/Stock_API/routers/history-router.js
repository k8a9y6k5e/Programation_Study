const express = require('express');

const showHistory = require('./../controllers/history-controller');

const historyRouter = express.Router();

historyRouter.get('/showHistory', showHistory);

module.exports = historyRouter;