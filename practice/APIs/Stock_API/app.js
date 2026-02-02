const express = require('express');

const itemRouter = require('./routers/item-routers');
const {errorHandler} = require('./error/error-handler');
const {logMovement} = require('./controllers/history-controller');
const historyRouter = require('./routers/history-router');

const app = express();
app.use(express.json());

app.use(logMovement);

app.use('/item', itemRouter);

app.use('/history', historyRouter);

app.use(errorHandler);

app.listen(3001);