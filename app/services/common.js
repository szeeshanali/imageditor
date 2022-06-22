const categoryModel = require("../models/categories");
const uploadModel = require("../models/uploads"); 

const commonService = (function() {

    this.cached_categories = null;
    this.cached_categoryItems = {};

    this.getCategoriesAsync = async ()=>
    { 
        console.log("Called: CommonService>CategoryService.");
        if(cached_categories == null)
        { cached_categories = await categoryModel.find({}); }
        console.log(cached_categories);
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

    this.clearCache = ()=> {
        this.cached_categories = [];
        this.cached_categoryItems = [];
    }

    return {
        categoryService: {
            getCategoriesAsync  :   this.getCategoriesAsync,
            getCategoryAsync    :   this.getCategoryAsync
        },
        clearCache: clearCache
    }
})();


module.exports = commonService; 