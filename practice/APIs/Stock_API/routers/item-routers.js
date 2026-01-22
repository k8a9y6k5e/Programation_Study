const express = require('express');

const {itemValidator, searchValidator} = require('../validators/item-validator');
const {itemAdd, showAll, searchItem} = require('../controllers/item-controllers');

const itemRouter = express.Router();

itemRouter.post('/add', itemValidator, itemAdd);

itemRouter.get('/showAll', showAll);

itemRouter.get('/search', searchValidator,searchItem);

module.exports = itemRouter;