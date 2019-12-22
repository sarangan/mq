const app = require('./app');
const connectDatabase = require('./db');
const rmq = require('./rabbitmq');

const database = connectDatabase();
const PORT = 8080;


console.log('Connecting to DB...');

database().then(db => {
    global.DB = db;
    console.log('Connected to DB...');

    rmq.receive();
    app.listen(PORT, () => {
        console.log(`Server started on ${PORT}`);
    });

});

