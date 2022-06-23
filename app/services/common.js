const categoryModel = require("../models/categories");
const uploadModel = require("../models/uploads"); 
const appuserModel = require("../models/appuser"); 

const commonService = (function() {
    this.cached_categories = null;
    this.cached_categoryItems = {};
    this.getCategoriesAsync = async ()=>
    { 
        console.log("Called: CommonService>CategoryService.");
        if(cached_categories == null)
        { cached_categories = await categoryModel.find({}); }
        return cached_categories; 
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
        console.log("all customers: ", customers);
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

        var uploads     = await uploadModel.find({}).select({_id:1});   
        report.totalUploads = uploads?.length || 0;

        return report; 

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
        reportingService: {
            getCustomerReport   :   this.getCustomerReport,
            getSummaryReport    :   this.getSummaryReport,  
        },
        clearCache: clearCache
    }
})();


module.exports = commonService; 