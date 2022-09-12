const categoryModel = require("../models/categories");
const uploads = require("../models/uploads"); 
const appuserModel = require("../models/appuser"); 
const contents = require("../models/contents"); 

const { default: mongoose, mongo } = require('mongoose');

const commonService = (function() {
    this.cached_categories = [];
    this.cached_categoryItems = [];
    this.cached_templates = [];
    this.getCategoriesAsync = async ()=>
    { 
        return await categoryModel.find({});
    },

    this.getTemplatesAsync = async (active)=>
    { 
     
        return  await uploads.find({type: 'template', active:true, by_admin:true  },
    {
        code:1,
        base64:1,
        title:1,
        name:1,
        ref_code:1
    }).sort({order_no:1}); },

    this.getPreDesigned = async (userId, designId)=>
    { 
        var designs = [];
        if(!designId)
        { designs = await uploads.find({active:true, 
            type:'pre-designed', 
            by_admin:true },{code:1,thumbBase64:1,title:1 }); 

        }else if(designId == "default")
        {
            designs = await uploads.findOne({active:true, 
            type:'pre-designed', 
            by_admin:true, 
             });

        }else{
            designs = await uploads.findOne({active:true, 
                type:'pre-designed', 
                by_admin:true, 
                code: designId
            });
        }
        return  designs;
    }

    this.getUploads = async (type, active, by_admin)=>
    { 
        var designs = [];
        if(type == 'all')
        {
            designs =   await uploads.find({ active:active, by_admin:by_admin, deleted:false},
            {
                code:1,
                base64:1,
                title:1,
                type:1,
                name:1,
                ref_code:1
            }).sort({order_no:1}); 
        }else{
            designs =   await uploads.find({type: type, active:active, by_admin:by_admin,deleted:false  },
            {
                code:1,
                base64:1,
                title:1,
                type:1
            }).sort({order_no:1}); 
        }
      
        return  designs;
    }

    this.getUserDesignsAsync = async (userId, designId)=>
    { 
        var designs = [];
        if(!designId)
        { designs = await uploads.find({
            active:true, 
            type:'project', 
            by_admin:false, 
            uploaded_by: userId,
            active:true,
            deleted:false
        },{code:1,thumbBase64:1,title:1}); 
        }else if(designId == "default")
        {
            designs = await uploads.findOne({active:true, 
            type:'project', 
            by_admin:false, 
            uploaded_by: userId,
            active:true });

        }else{
            designs = await uploads.findOne({
                active:true, 
                type:'project', 
                by_admin:false, 
                code: designId,
                uploaded_by: userId
             });
        }
        return  designs;
    }
    this.getTemplateAsync = async (templateId)=>
    { 

        return await uploads.findOne({active:true, type:'template',  code:templateId}); 
    },
    this.deleteTemplatesAsync = async (id)=>
    { 
       var d = await uploads.deleteOne({code: id, active:true, type:'template',uploaded_by:'admin'});
       cached_templates = null; 
    },
    this.deleteUploadAsync = async(id, type, ownerId)=>{
        await uploads.deleteOne({code: id, type:type, uploaded_by:ownerId});
    }
    this.getSVGTemplatesAsync = async (id)=>
    { 
        return res.sendFile(`/images/${id}.svg`);
    },
    this.getCategoryAsync = async (categoryId)=>{
        if(cached_categories == null)
        { cached_categories = await categoryModel.find({}); }
        
        var findCategory = await cached_categories.findOne({_id:categoryId});
        var categoryItemIds = [];

        if(!findCategory)
        { throw `unable to find category : categoryId: ${categoryId}`; }
        
        categoryItemIds = findCategory.items;
        
        if(categoryItemIds == null || categoryItemIds.length === 0)
        { return []; }
        
        var uploadedItems = await uploads.find({code:categoryItemIds});

        return uploadedItems;
    },
    this.addCategoryItemAsync = async (categoryId, itemCode)=>{
        var findCategory = await categoryModel.findOne({code:categoryCode});
    
        if(!findCategory)
        { throw `unable to find category : categoryId: ${categoryId}`; }
        
        await uploads.updateOne({code: id, type:type, uploaded_by:ownerId}, {deleted:true});
       await findCategory.updateOne({code:categoryItemIds}, {$push: { items: itemCode }});

    },
    this.getCustomerReport = async()=> { 
        var customers = await appuserModel.find({is_admin:{$ne:true}});
        var report = {
            todayCustomer:0,
            thisWeekCustomers:0,
            thisMonthCustomers:0
        } 
        if(!customers)
        { return report; }

        var start = new Date();
        start.setHours(0,0,0,0);
        var end = new Date();
        end.setHours(23,59,59,999);
        var today = new Date();
        report.todayCustomers      = customers.filter(function(value){ 
            return value.date >= new Date(today.getFullYear(), today.getMonth(), today.getDate()-1);}).length || 0;
        report.thisWeekCustomers   = customers.filter(function(value){ return value.date >= new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);}).length || 0;
        report.thisMonthCustomers  = customers.filter(function(value){ return value.date >= new Date(today.getFullYear(), today.getMonth(), today.getDate()-30);}).length || 0;
        report.totalCustomers      = customers.length; 

        return report; 
        
    },
    this.getSummaryReport = async () =>
    {
        var report = {
            totalCategories:0,
            totalUploads: 0
        }

        var categories  = await this.getCategoriesAsync(); 
        report.totalCategories = categories?.length || 0;

        // var uploads     = await uploads.find({}).select({_id:1});   
        // report.totalUploads = uploads?.length || 0;

        return report; 

    }
    this.upload = (uploadModel, result)=>{

        var ticks = new Date().getTime();
        var objectId = mongoose.Types.ObjectId();
        var upload = new uploads(uploadModel);
        upload.save()
        .then((value)=>{
            result(false,value);
           // res.redirect(ROUTE_ADMIN_HOME);
        }).catch(value=> {
            result(true,value);
        });
       }
       this.clearUploads = ()=> {
        this.cached_templates = null;
       
    }

    this.getContentAsync = async (type)=>{
     var content =  await contents.findOne({type:type});
     return content; 
    }

    this.addOrUpdateContentAsync = async (content,type,by_admin)=>{
        if(content == null || content.length < 10)
        {throw "Empty content."; }
        var hasContent = await contents.findOne({type:type},{_id:1});
        if(hasContent != null)
        {
            console.log("content updated"); 
            await contents.updateOne({_id:hasContent._id},{content:content,by_admin:by_admin,modified_dt: new Date()}); }
        else
        { 
        console.log("content inserted");
        var content = new contents({content:content,type:type,by_admin:by_admin});
        await content.save()
    }}

    this.clearCache = ()=> {
        this.cached_categories = [];
        this.cached_categoryItems = [];
    }



    return {
        categoryService: {
            getCategoriesAsync  :   this.getCategoriesAsync,
            getCategoryAsync    :   this.getCategoryAsync,
            addCategoryItemAsync     :   this.addCategoryItemAsync
        },
        uploadService:{
            upload                  :   this.upload,
            getTemplatesAsync       :   this.getTemplatesAsync,
            getPreDesigned          :   this.getPreDesigned,
            getTemplateAsync        :   this.getTemplateAsync,
            deleteTemplatesAsync    :   this.deleteTemplatesAsync, 
            getSVGtemplatesAsync    :   this.getSVGTemplatesAsync, 
            getUserDesignsAsync     :   this.getUserDesignsAsync,
            deleteUploadAsync       :   this.deleteUploadAsync, 
            clear                   :   this.clearUploads,
            getUploads              :   this.getUploads,
        },
        reportingService: {
            getCustomerReport   :   this.getCustomerReport,
            getSummaryReport    :   this.getSummaryReport,  
        },

        contentService: {
            addOrUpdateContentAsync  :  this.addOrUpdateContentAsync ,
            getContentAsync          :  this.getContentAsync
        },

       
        clearCache: clearCache
    }
})();


module.exports = commonService; 