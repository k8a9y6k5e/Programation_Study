const express = require('express');
const app = express();

//logs it's a way to control the process of the endpoints

//morgan library is a http request logger
const morgan = require('morgan');

//to use the morgan, us simply use:
//morgan(<format>, <option>);

/*
the library morgan has some formats to use in:
-dev : method, url, status code and response time;
-tiny : method, url, status code, response size and response time; 
-short : remote IP and response size;
-common : IP, date, method, route, status code and response size;
-combined : referrer, user-agent, IP, date, method, route, status code and response size
*/

/*
and some options to use:
-stream : define where go the log;
-skip : define when don't log;
-immediate : the time to log when come the response, can be:
--true:log after the response;
--false:log before the response;
-buffer: group logs before write it;
*/

function skipHandler(req,res){ return req.query.skip == 'true' ? true : false;}

app.use('/morgan',morgan('dev', {
    skip : skipHandler
}));

app.get('/morgan', (req, res)=>{res.send('morgan logged');});


//winston library

const winston = require('winston');

//used to manual logs

//to create the instance of logger
//to it, use the command createLogger

/*
to create the logger, us need some informations, which is(value with "*" are required options):
-level : define the minimun level of the log, can be:
--error : 0, emergencies, need immediate attention;
--warn : 1, give a warn;
--info(default): 2, it's the basic level;
--http : 3, specific for http logs, like the morgan logs;
--verbose : 4, used to more details but not going to debug;
--debug : 5, used to develop, normally stop the protuction;
--silly : 6;
*-transports : define where the logs go;
-format : define how the log be showed;
-defaultMeta : add fixed informations in the logs;
-levels : allow to create personalizated levels;
-exitOnError : define if the app could end if logged an error not handled;
*/


const logger = winston.createLogger({
    level : 'http',
    transports : [new winston.transports.File({filename : 'log-winston-test.log'})]
});

app.get('/winston', (req,res)=>{
    logger.http(req.url);
    logger.info('winston log');
    res.send('winston logged');
});

app.listen(3000);

//to connect both, us use:

function winstonWrite(message) {morganwinstonLogger.http(message);}

const morganwinstonLogger = winston.createLogger({
    level : 'http',
    transports : [new winston.transports.File({filename : 'log-winston-test.log'})]
});

app.use('/winstonMorgan', morgan('dev', {
    stream : {write : winstonWrite}
}));

app.get('/winstonMorgan',(req,res)=>{
    res.send('both is logged')
});