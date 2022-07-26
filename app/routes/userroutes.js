const express = require('express');
const router = express.Router();


//logout
router.get('/logout',(req,res)=>{
console.log("LogOut");
})
module.exports  = router;