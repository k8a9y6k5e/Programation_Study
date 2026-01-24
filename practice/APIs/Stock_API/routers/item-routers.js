const express = require('express');

const {itemValidator, searchValidator} = require('../validators/item-validator');
const {itemAdd, showAll, searchItem, itemDelete} = require('../controllers/item-controllers');

const itemRouter = express.Router();

itemRouter.post('/add', itemValidator, itemAdd);

itemRouter.get('/showAll', showAll);

itemRouter.get('/search', searchValidator,searchItem);

itemRouter.delete('/delete/:item',itemDelete);

module.exports = itemRouter;