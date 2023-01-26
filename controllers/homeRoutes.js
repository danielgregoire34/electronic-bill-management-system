const router = require('express').Router();



//  TO GET LOGIN PAGE

router.get('/',function(req,res){
    try{
        res.render('login',{title: "Subscription Management Services"});
    } catch (err){
        res.status(500).json(err);
    }
    
});


// TO REGISTRATION PAGE 

router.get('/registration',function(req,res){
    try{
        res.render('registration',{title: "SMS: Registration"});
    } catch (err){
        res.status(500).json(err);
    }
    
});


// TO GET DASHBOARD PAGE

router.get('/dashboard',function(req,res){
    try{
        res.render('dashboard',{title: "SMS: Dashboard"});
    } catch (err){
        res.status(500).json(err);
    }
    
});



// TO GET TO NEW ACCOUNT PAGE

router.get('/new-account',function(req,res){
    try{
        res.render('new-account',{title: "SMS: New Account"});
    } catch (err){
        res.status(500).json(err);
    }
    
});


module.exports = router;