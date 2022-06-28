const express               = require('express');
const { default: mongoose } = require('mongoose');
const router                = express.Router();
const uploads               = require("../models/uploads");
const categories            = require("../models/categories");

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

router.get('/app/404',(req,res)=>{
    res.redirect("pages/admin/404.ejs")
})

router.post('/app/workspace',(req,res)=>{
    const  {width, height, title} = req.body;
    res.render("pages/client/index",{ executescript: `callback({width:${width},height:${height},title:${title}});` })
})
router.get('/app/workspace',(req,res)=>{
    const  {width, height, title} = req.body;

    res.render("pages/client/index",);``
})

router.get('*',(req,res)=>{
    res.render("pages/admin/404.ejs",{layout:false})
})
module.exports = router;