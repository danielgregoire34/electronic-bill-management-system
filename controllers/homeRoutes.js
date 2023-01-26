const router = require('express').Router();

router.get('/',function(req,res){
    try{
        res.render('login',{title: "Subscription Management Services"});
    } catch (err){
        res.status(500).json(err);
    }
    
});

router.get('/registration',function(req,res){
    try{
        res.render('registration',{title: "Subscription Management Services"});
    } catch (err){
        res.status(500).json(err);
    }
    
});

router.get('/dashboard',function(req,res){
    try{
        res.render('dashboard',{title: "Subscription Management Services"});
    } catch (err){
        res.status(500).json(err);
    }
    
});

router.get('/new-account',function(req,res){
    try{
        res.render('new-account',{title: "Subscription Management Services"});
    } catch (err){
        res.status(500).json(err);
    }
    
});


module.exports = router;