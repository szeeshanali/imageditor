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

    var items = await uploads.find({type:'template',uploaded_by:"admin",active:true}).sort({order_no:1});    
    if(!items)
    {console.log(`category items not found against ${itemid}`)}
    res.send(items);
})
router.post('/api/logs', (req,res)=>{
    // if(!process.env.ENABLED_LOG != "true")
    // { return res.status(403).send("Ok"); }

    const {level,message,type,content,path,is_admin, data} = req.body;
    commonService.logger.log(req.user._id,level,type,message,content,path,is_admin, data);
    res.status(200).send("Ok");

})
router.put('/api/design/:id', async (req,res)=>{
    const {code, desc, meta, title,name,file_name,file_ext,order_no,active,base64,type,by_admin,link} = req.body; 

    var item = await uploads.findOne({code:code});    
    if(!items)
    {console.log(`category items not found against ${itemid}`)}

    let errors = [];

    dbo.collection("customers").updateOne({code:code}, {code, desc, meta, title,name,file_name,file_ext,order_no,active,base64,type,by_admin,link}, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });

    res.send(items);
})



// router.get('/api/svg-templates/:id',  async (req,res)=>{
//     const itemid = req.params["id"]; 
//     var result = null; 
//     if(itemid == "default"){
//         result = await uploads.findOne({
//             type:'template', by_admin:true, active:true, default:true });    
//     }else{

//         result = await uploads.findOne({
//             type:'template', by_admin:true, active:true, code:itemid });  
//     }
//     res.send(result);
    
// })

router.get('/app/404',(req,res)=>{
    res.redirect("pages/admin/404.ejs")
})

router.get('/app/terms',async (req,res)=>{
    var content = await commonService.contentService.getContentAsync('terms') || {};
   res.send(content.content);
})

router.get('/app/faq',async (req,res)=>{    
    var content = await commonService.contentService.getContentAsync('faq') || {};
    res.send(content.content);
})

router.get('/app/privacy-policy',async (req,res)=>{    
    var content = await commonService.contentService.getContentAsync('privacy-policy') || {};
    res.send(content.content);
})

router.get('/',(req,res)=>{
    res.redirect("/app/main");
})
router.get('*',(req,res)=>{
    res.render("pages/admin/404.ejs",{layout:false})
})
module.exports = router;