const express = require('express');
const signUpRouter = require('./router/sign-up-router');
const {errorMiddleWare} = require('./error-handler/error-handler');

const app = express();

//to save the secret, because is a study program
process.env.JWT_secret = "70b7c0a466a9e99e83e3c268a385cf39f7b0b724ac87c52f721d19b911df9950";

app.use(express.json());

app.use(errorMiddleWare);

app.use('/signUp', signUpRouter);

app.listen(3002);

/*
ROADMAP:
*Log In
**way to enter with
***password
***email
**validator in each value enter
**show informations
*use jwt to auth
*use bcrypt in password
*Sign Up
**add a validator in each value
**add an error handler
*/