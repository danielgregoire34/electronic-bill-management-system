const router = require('express').Router();

router.get('/',function(req,res){
    try{
        res.render('homepage',{title: "SMS"});
    } catch (err){
        res.status(500).json(err);
    }
    
});

module.exports = router;