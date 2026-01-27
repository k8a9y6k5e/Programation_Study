const express = require('express');
const itemRouter = require('./routers/item-routers');
const {errorHandler} = require('./error/error-handler');


const app = express();
app.use(express.json());

app.use('/item', itemRouter);

app.use(errorHandler);

app.listen(3001);


/*
little roadmap:
*update items;
**update quantity - patch;
**update price - patch;
*history:
**log;
**show;
*/