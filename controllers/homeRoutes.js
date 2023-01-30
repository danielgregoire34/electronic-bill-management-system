const router = require('express').Router();
const { Account ,User } = require('../models');
const withAuth = require('../utils/auth');


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

//const subName = document.querySelector('#accountName').value.trim();


router.get('/dashboard',function(req,res){

    try{
        res.render('dashboard',{
            stuff: 'Something Else',
            title: "SMS: Dashboard"});
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





//auth middleware 
router.get('/dashboard', withAuth, async(req,res)=>{
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{model: Account}],
        });
    
        const user = userData.get({ plain: true });
    
        res.render('dashboard', {
        ...user,
        logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login',(req,res)=>{

    if(req.session.logged_in){
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
})




module.exports = router;