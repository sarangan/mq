const mongo = require('./db');
const tblName = 'todos';

class TodoModel{

    insert(data){
        return global.DB.collection(tblName).insertOne(data);
    }
}

module.exports = {
    TodoModel
};