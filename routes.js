const express =  require('express');
const router = express.Router();
const {getTodo} = require('./services/todo.services');
const TodoModel = require('./model').TodoModel;
const rmq = require('./rabbitmq');

router.route('/msg')
.get((req, res) => {
     res.json({d: `Date ${Date.now()}`});
});

router.route('/todo/:id?')
.get( async(req,res) =>{
    if(req.params.id){
        const result = await getTodo(req.params.id);
        res.json({data: result});
    }
    else{
        res.status(404).send('Not find');
    }
    
})
.post( async(req, res) =>{
    const todoModel = new TodoModel();
    const insertResult = await todoModel.insert({...req.body, date: new Date()});
    rmq.publish(`Inserted to DB ${insertResult.insertedId}`)
    res.status(201).json({result: insertResult});
});

module.exports = router;