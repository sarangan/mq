const express =  require('express');
const app = express();
const router = require('./routes');

function logger(req,res, next){
    console.log('getting req');
    next();
}

app.use(logger);
app.use('/api', router);

module.exports = app;