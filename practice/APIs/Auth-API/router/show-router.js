const express = require('express');
const showController = require('../controller/show-controller');
const showHeaderValidator = require('../validator/show-validator');

const showRouter = express.Router();

showRouter.get('/informations', showHeaderValidator, showController);

module.exports = showRouter;