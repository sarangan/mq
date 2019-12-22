const mongodb = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://localhost:27017';
const collectionName = 'todosDB';

module.exports = () =>{
    const connection = mongodb.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});
    const getDB = () => connection.then(client => client.db(collectionName));
    getDB.close = () => onnection.then(client => client.close());
    return getDB;
}