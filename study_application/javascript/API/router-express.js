const express = require('express');

const app = expres();
//ROUTER 
//it's a mini-application, an instance of middlewares and routes
// !!! the code bellow don't because need to be created a little before

// - express.Router(<option>);
//create the router.
//options:
// - caseSensitive : Enable case sentivy;
// - mergeParams : Merge the same name params; 
// - strict : Enable strict routing;

const router = express.Router();

//to use the router

app.use(router);
//can have the path way as args, like: app.use(<path>, <router instanve>);

// - router.all(<path>, <middleware/callback>);
//a global logic for the specific path

router.all('/router/:all', (req, res, next) =>{
    console.log('router\n');
    next();
});

//router.METHODS(<path>, <middlewares/callbacks>);
//METHODS is the way to speak about the post, put, get, update methods from app
//work in the specyfic rout and path

router.get('/', (req, res, next) =>{
    console.lof('get router');
    next();
});

//router.param(<param name>, <callback(req, res, next,<param name>)>);
//adds a callback trigger to route parameters
//will be triggered only with routes defined on router routes

router.param('test', (req, res, next, test) =>{
    console.log('param console');
    next();
});

router.get('/router/:test', (req, res, next)=>{
    console.log('get router');
    res.send();
});

//router.rout(<path>);
//allow the creation of multiple routes with same path

router.route('/router/a/mult')
    .all((req,res, next)=>{console.log('multi routes, all'); next();})
    .get((req, res, next)=>{console.log('multi routes, get');res.end();});

//router.use(<path>, <function(s)>);
//work equals as "app.use", but works with routes, while "app.use" works global(all routes)

app.listen(3000);