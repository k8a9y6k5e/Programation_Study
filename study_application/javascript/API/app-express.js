/* 
* GET - search data, send query params(URL) - Read
* POST - create something, send the body - Creation/Action
* PUT - replace the entire resource - Substitute all
* PATCH - update a part of the resource - Partial update
* DELETE - delete a resource - Remove
* OPTIONS - discover allowed methods - Capabilities
* HEAD - same as GET, no response body - Metadata
*/

/*
*REQ - request - query or JSON which come(to exterior) to use
*RES - response - value to return to exterior(application to make it)
*/

//create a variable with the imported module, getting a function from express
const express = require('express');

//create an instance with the function, to apply
const app = express();

//open the listener, allowing to the program acess the local server
console.log(app.listen(3000));//port - value inside the parenteses

//the port need to be the same as used to test or to work
//all paths needs to be equals from the work/test
//functions need to receive request(req) and a response(res) value parameters


//GET request

//SYNTAX -- app.get(<path>, <callback/function>)

const valueNeed = 'STROK';

app.get('/get', (req, res) => {
    if(Object.values(req.query).find((value) => (value == valueNeed) ? true : false)) {
        console.log('work');
        res.send('str - true');
    }
    if(Object.values(req.query).find((value) => (value == valueNeed) ? true : false)) res.send('str - true');
    else res.send('str - false');
});

//res.send(<value>);
//return a value, work as a "confirmation" message

//POST request

//SYNTAX -- app.post(<path>, <callback/function>);

app.use(express.json());//allow to use JSON values from requests

app.post('/post', (req, res) => {
    console.log(req.body);
    res.send(true);
});

//PUT request

//SYNTAX -- app.put(<path>, <callback/function>);


app.put('/put', (req, res) => {
    console.log("change call(PUT)");
    console.log(JSON.stringify(req.body));
    res.send('working');
});

//PATCH request

//SYNTAX -- app.patch(<path>, <callback/function>);

app.patch('/patch', (req, res) => {
    console.log(`Change this: ${Object.keys(req.body)}`);
    console.log(`To this: ${Object.values(req.body)}`);
    res.send('values changed');
});

//DELETE request

//SYNTAX -- app.delete(<path>, <callback/function>);

app.delete('/delete/:value', (req, res) => {//the colon transfom it in a variable
    console.log('delete request - to delete : ' + req.params.value);//to access the params inside the url, in case, the value param
    console.log(req.url);//to access the whole url
    res.send(`deleted : ${req.params.value}`);
});

//PATHs

const paths = [
    '/abc',//hits only the specific path
    ['/abc', '/def'],//hits all match path inside the array
    '/abc/:abcvalue',//create a variable with the param(value after colon)
    '/abc/:abcvalue?',//with a optional second value
    '/abc/*',//match with any subpath, if the path match
]



//REQuest commands

// - req.params;
//it's the properties defined at the URL
//functions:
// -- .name: give the name of the params
// -- .<name to param add>: used in cases which in url, has an special option to it, saving the value in it name
//like: "/url/:param", to use .param

// - req.query;
//an object with each quey string in parameters

// - req.body;
//to receive json/object requests

// - req.headers;
//to receive metadades

app.get('/reqC/:param', (req, res) => {
    console.log(`param request : ${JSON.stringify(req.params)}`);
    console.log(`query request : ${JSON.stringify(req.query)}`);
    console.log(`body request : ${JSON.stringify(req.body)}`);
    console.log(`header request : ${req.headers['headervalue']}`);
    res.end();
});

//RESponse commands

// - res.send(<body/reponse>);
//sends a response to user, the body can by any type

// - res.json(<body/json>);
//sends a JSON response to user

// - res.end();
//end the process whitout any response

app.get('/resC', (req, res) => {
    switch(req.query.response){
        case 'send':
            res.send("normal response");
            break;
        case 'json':
            res.json({responseReturn : "JSON"});
            break;
        case 'end':
            res.end();
            break;
    }
});

// - express.json(<option>);
//buid-in middleware function, which convert the json body into an object to use at code
//options in it:
// - inflate - block compressed bodys 
// - limit - control the maximum request size
// - reviver - function passed with the JSON.parse
// - strict - allow to pass any value which JSON.parse can use(or block)
// - type - define which functions the middleware will process, to allow another type of bodys
// - verify - to add a verificator function to use in raw body


// - res.status(<code>);
//set the status of the response, can send the code with a message
//status code:
//-200 - Ok
//-201 - Created
//-204 - No Content
//-400 - Bad Request
//-401 - Unauthorized
//-403 - Forbidden
//-404 - Not Found
//-405 - Method Not Allowed
//-409 - Conflict
//-500 - Internal Server Error
//-503 - Service Unavailable

//MIDDLEWARE - the function which values will pass, it's used next as callback to pass to the next middleware
//middlewares can be more than 2

// - next();
//3rd function received for an API route, it's the callback to the next middleware, to pass to the other

app.get('/midware', (req, res, next) =>{//middleware one
    //runs middleware 1
    res.status(201);
    next();//pass to middleware 2
}, (req, res) =>{//middleware two
    //run middleware 2
    res.send('test');
    res.end();//end route
});