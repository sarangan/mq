const express =  require('express');
const router = express.Router();
const {getTodo} = require('./services/todo.services');

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
    
});

module.exports = router;