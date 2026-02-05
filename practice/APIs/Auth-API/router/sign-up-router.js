const express = require('express');
const creationAccountController =require('./../controller/sign-up-controller');
const signUpValidator = require('../validator/sign-up-validator');

const signUpRouter = express.Router();

signUpRouter.post('/createAccount', signUpValidator, creationAccountController);

module.exports = signUpRouter;