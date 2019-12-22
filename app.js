const express =  require('express');
const app = express();
const router = require('./routes');

function logger(req, res, next){
    console.log(`URL ${req.path}`);
    next();
}

function errorHandler(err, req, res, next){
    // console.log(`Error is ${err.message}`);
    // res.status(500).send("Error happend, We will look in to it.");
    if (res.headersSent) return next(error);
	res.status(error.status || 500).json({
		status: error.status || 500,
		message: error.message || 'Something went wrong.',
	})
}

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger);
app.use(errorHandler);
app.use('/api', router);

module.exports = app;