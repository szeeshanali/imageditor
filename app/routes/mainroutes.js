const express               = require('express');
const { default: mongoose } = require('mongoose');
const router                = express.Router();
const uploads               = require("../models/uploads");
const categories            = require("../models/categories");
const commonService = require('../services/common');
const path = require('path');

router.get('/api/category/:id', async (req,res)=>{
    const categoryId = req.params["id"]; 
    if(!categoryId)
    {console.log("error")}

    var findCategory = await categories.findOne({_id: mongoose.Types.ObjectId(categoryId)});
    if(!findCategory)
    {console.log(`category not found against ${categoryId}`)}
    var itemIds = findCategory.items;    
    var items = await uploads.find({code: itemIds, active:true}).select({json:0});    
    if(!items)
    {console.log(`category items not found against ${categoryId}`)}
    res.send(items);
})

router.get('/api/categoryitem/:id', async (req,res)=>{
    const itemid = req.params["id"]; 
    if(!itemid)
    {console.log("error")}

    var item = await uploads.findOne({_id: mongoose.Types.ObjectId(itemid) }).select({json:1});    
    if(!item)
    {console.log(`category items not found against ${itemid}`)}
    res.send(item);
})

router.get('/api/templates', async (req,res)=>{

    var items = await uploads.find({type:'templates',uploaded_by:"admin",active:true});    
    if(!items)
    {console.log(`category items not found against ${itemid}`)}
    res.send(items);
})
router.get('/api/svg-templates/:id', async (req,res)=>{
    const itemid = req.params["id"]; 
    var result = null; 
    if(itemid == "default"){
        result = await uploads.findOne({
            type:'template', uploaded_by:"admin", active:true, default:true });    
    }else{

        result = await uploads.findOne({
            type:'template', uploaded_by:"admin", active:true, code:itemid });  
    }
    res.send(result);
    //var items = await uploads.find({type:'templates',uploaded_by:"admin",active:true});    
    //var svg = req.params.id;   
    //res.sendFile(path.resolve(`../app/public/images/${svg}.svg`));
})

router.get('/app/404',(req,res)=>{
    res.redirect("pages/admin/404.ejs")
})



router.get('*',(req,res)=>{
    res.render("pages/admin/404.ejs",{layout:false})
})
module.exports = router;