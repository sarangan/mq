const express =  require('express');
const router = express.Router();
const rq = require('request-promise');

router.route('/msg')
.get((req, res) => {
     res.json({d: `Date ${Date.now()}`});
});

router.route('/user')
.get((req,res) =>{
     res.json('value');
});

module.exports = router;