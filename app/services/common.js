const categoryModel = require("../models/categories");
const uploads = require("../models/uploads"); 
const appuserModel = require("../models/appuser"); 
const { default: mongoose, mongo } = require('mongoose');

const commonService = (function() {
    this.cached_categories = [];
    this.cached_categoryItems = [];
    this.cached_templates = [];
    this.getCategoriesAsync = async ()=>
    { 
        console.log("Called: CommonService>CategoryService.");
        if(cached_categories == null)
        { cached_categories = await categoryModel.find({}); }
        return cached_categories; 
    },

    this.getTemplatesAsync = async ()=>
    { 
        // console.log("Called: CommonService> getTemplatesAsync");
        // if(cached_templates == null || cached_templates.length == 0)
        // { cached_templates = await uploads.find({active:true,type:'template',uploaded_by:'admin'}); }
        // return cached_templates; 

        return  await uploads.find({active:true,type:'template',uploaded_by:'admin'});
    },

    this.getTemplateAsync = async (templateId)=>
    { 
        console.log("Called: CommonService> getTemplateAsync");
        return await uploads.findOne({active:true,type:'template',uploaded_by:'admin', code:templateId}); 
    },

    this.deleteTemplatesAsync = async (id)=>
    { 
        console.log("Called: CommonService > DeleteTemplatesAsync");
       var d = await uploads.deleteOne({code: id, active:true,type:'template',uploaded_by:'admin'});
       cached_templates = null; 
    },
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


    this.getCustomerReport = async()=> { 
        console.log("called: commonService:getCustomerReport");
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
        console.log("today customers: ", report.todayCustomers);
        report.thisWeekCustomers   = customers.filter(function(value){ return value.date >= new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);}).length || 0;
        console.log("this week customers: ", report.thisWeekCustomers);
        report.thisMonthCustomers  = customers.filter(function(value){ return value.date >= new Date(today.getFullYear(), today.getMonth(), today.getDate()-30);}).length || 0;
        console.log("today month: ", report.thisMonthCustomers);
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
    this.upload = (uploadModel)=>{

        var ticks = new Date().getTime();
        var objectId = mongoose.Types.ObjectId();
        var upload = new uploads(uploadModel);
        upload.save()
        .then((value)=>{
           // res.redirect(ROUTE_ADMIN_HOME);
        }).catch(value=> console.log(value));
       }
       this.clearUploads = ()=> {
        this.cached_templates = null;
       
    }

    this.clearCache = ()=> {
        this.cached_categories = [];
        this.cached_categoryItems = [];
    }

    return {
        categoryService: {
            getCategoriesAsync  :   this.getCategoriesAsync,
            getCategoryAsync    :   this.getCategoryAsync
        },
        uploadService:{
            upload              :   this.upload,
            getTemplatesAsync   :   this.getTemplatesAsync,
            getTemplateAsync   :   this.getTemplateAsync,
            deleteTemplatesAsync:   this.deleteTemplatesAsync, 
            getSVGtemplatesAsync     :   this.getSVGTemplatesAsync, 
            clear               :   this.clearUploads
        },
        reportingService: {
            getCustomerReport   :   this.getCustomerReport,
            getSummaryReport    :   this.getSummaryReport,  
        },

       
        clearCache: clearCache
    }
})();


module.exports = commonService; 