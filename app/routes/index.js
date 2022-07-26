const express = require('express');
const router  = express.Router();
//login page
router.get('/app', (req,res)=>{
    res.render('/pages/index');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})

module.exports = router; 