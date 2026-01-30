const jwt = require('jsonwebtoken');

const token = jwt.sign({sub : 1}, '1nf1n1ty8 3nc063 k3y', {expiresIn : '30m'});

console.log(token);

if(jwt.verify(token, '1nf1n1ty8 3nc063 k3y').sub == 1) console.log("{\"user\" : \"1\"}");

const express = require('express');

const app = express();

let ids = 2;

app.post('/jwt', (req, res) => {
    const userToken = jwt.sign({sub : ids}, '1nf1n1ty8 3nc063 k3y', {expiresIn : '30m'});
    ids++;
    res.send(userToken);
});

app.get('/jwt', (req,res) =>{
    req.user = jwt.verify(req.headers.authorization, '1nf1n1ty8 3nc063 k3y');
    res.send(req.user);
});

app.listen(3000);