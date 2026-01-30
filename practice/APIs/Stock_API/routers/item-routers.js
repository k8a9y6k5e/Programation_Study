const express = require('express');

const {itemValidator, searchValidator, deleteValidator, updatePutValidator, updatePatchValidator} = require('../validators/item-validator');
const {itemAdd, showAll, searchItem, itemDelete, completeItemUpdate, itemUpdate} = require('../controllers/item-controllers');

const itemRouter = express.Router();

itemRouter.post('/add', itemValidator, itemAdd);

itemRouter.get('/showAll', showAll);

itemRouter.get('/search', searchValidator,searchItem);

itemRouter.delete('/delete/:item', deleteValidator, itemDelete);

itemRouter.put('/update/:toChange', updatePutValidator, completeItemUpdate);

itemRouter.patch('/update/:toChange', updatePatchValidator, itemUpdate);

module.exports = itemRouter;