const express =  require('express');
const app = express();
const router = require('./routes');

function logger(req, res, next){
    console.log(`URL ${req.path}`);
    next();
}

function errorHandler(err, req, res, next){
    console.log(`Error is ${err.message}`);
    res.status(500).send("Error happend, We will look in to it.");
}

app.use(logger);
app.use(errorHandler);
app.use('/api', router);

module.exports = app;