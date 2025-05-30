const categoryModel         = require("../models/categories");
const uploads               = require("../models/uploads"); 
const appuserModel          = require("../models/appuser"); 
const contents              = require("../models/contents"); 
const logs                  = require("../models/logs"); 
const app_settings          = require('../models/settings');

const { default: mongoose, mongo } = require('mongoose');

const commonService = (function() {
    this.cached_categories = [];
    this.cached_categoryItems = [];
    this.cached_templates = [];
    this.getCategoriesAsync = (all) =>
    { 
        let categories = []; 
        if(all)
        {  categories =  categoryModel.find({deleted:false}); }
        else 
        {  categories = categoryModel.find({active:true,deleted:false}); }
    return categories.sort({order:-1});
    },
    this.getCategoriesByFilterAsync = (filter) =>
    { 
        filter['deleted'] = false;
        return categoryModel.find(filter);
    },
    this.deleteCategoriesByFilterAsync = async (filter) =>
    { 
        let itemExists = await uploads.find({type:"clipart", category:filter.id}); 
        if(itemExists != null && itemExists.length > 0)
        {throw 403};

        return await categoryModel.findOneAndUpdate({_id:filter.id},{deleted:true},{
            returnOriginal: false
        });
    },
    this.addCategoryAsync = async (categoryName, order) =>
    { 
        var category = new categoryModel();
        category.name = categoryName;
        category.active = true; 
        category.deleted = false; 
        category.order = order;

        
        return category.save();
    },
    this.getTemplatesAsync = async (active)=> { 
     
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

    this.getUploads = (type,all) =>
    { 
        let filter = {}; 
        let projection = {code:1,title:1,type:1,name:1,ref_code:1,id:1,category:1,file_ext:1,active:1,base64:1, meta:1,link:1 };

        if(all)
        { 
            filter = {deleted:false};
            if(type != "all")
            {filter["type"] = type}
        }
        else 
        { filter = {type: type, active:true, deleted:false }; }
        
        return uploads.find(filter,projection).sort({order_no:1}); 
             
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
        },{code:1,thumbBase64:1,title:1,created_dt:1,name:1,meta:1}); 
        }else if(designId == "default")
        {
            designs = await uploads.findOne({active:true, 
            type:'project', 
            by_admin:false, 
            uploaded_by: userId,
            active:true });

        }else{
            if(userId == 'admin')
            {
                designs = await uploads.findOne({
                    _id: designId,
                    active:true, 
                    deleted:false,
                    type:'project',
                 });
    
            }else{
                designs = await uploads.findOne({
                    active:true, 
                    type:'project', 
                    by_admin:false, 
                    code: designId,
                    uploaded_by: userId
                 });
            }
           

              
             

        }
        return  designs;
    }
    this.getPreDesignedAsync = async (designId)=>
    { 
        var designs = [];
        if(!designId)
        { designs = await uploads.find({
            active:true, 
            type:'pre-designed', 
           
            active:true,
            deleted:false
        },{code:1,thumbBase64:1,title:1,created_dt:1,templateId:1}); 
        }else if(designId == "default")
        {
            designs = await uploads.findOne({active:true, 
            type:'pre-designed', 
            by_admin:true, 
            active:true });

        }else{
            designs = await uploads.findOne({
                active:true, 
                type:'pre-designed', 
                code: designId
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
    this.upload = async (uploadModel, selectedDesignId, result)=>{

        var ticks = new Date().getTime();
        var objectId = mongoose.Types.ObjectId();
        if(selectedDesignId && selectedDesignId.length>3){
          const update = { title: uploadModel.title, category:uploadModel.category, active:uploadModel.active };
            await uploads.findOneAndUpdate({_id:selectedDesignId}, update, {
                returnOriginal: false
            });

        }else{

        
            let templateCounts = await uploads.count({type:"template",deleted:false}); 
            uploadModel.order_no = templateCounts+1;
            var upload = new uploads(uploadModel);
            upload.save().then((value)=>{

                result(false,value);
            }).catch(value=> {
                result(true,value);
            });
        }
       
       }
       this.clearUploads = ()=> {
        this.cached_templates = null;
       
    }

    this.getContentAsync = async (type, isAdmin)=>{

        if(type === 'custom-text' )
        {  return await contents.find({type:type, active:true, deleted:false}).sort({order:1}); }

        if( type === 'fonts')
        {  
            let fonts = new Array();
           
            if(isAdmin)
            { fonts =  await contents.find({type:type, deleted:false}); }
            else
            { fonts = await contents.find({type:type, active:true, deleted:false}); }
            fonts.push({
                label : "Arial",
                content: "Arial",
                disable: true

            })
            fonts = fonts.sort(function(a, b) {
                    const nameA = a.content.toUpperCase(); 
                    const nameB = b.content.toUpperCase(); 
                    if (nameA < nameB) {
                    return -1;
                    }
                });
            
                return fonts;
            
        }


        return await contents.findOne({type:type, active:true, deleted:false});    
    }

   

    this.addOrUpdateContentAsync = async (label,content,type,by_admin,order)=>{
        if((content == null || content.length < 3) && type != 'custom-text' )
        {throw "Empty content."; }

        if(type === 'custom-text' || type === 'fonts' )
        {
            var content =  new contents({content:content,type:type,by_admin:by_admin,label:label,order:order});
            await content.save();
            return;
        }




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

    this.addLogs = (user_id,level,type,message,content,path,is_admin, data, pdfBase64, template_id, file_id)=>{
        let _log = new logs({
            user_id: user_id,
            level:level,
            message:message,
            content:content,
            type:type,
            path:path,
            is_admin:is_admin, 
            data: JSON.stringify(data),
            template_id:template_id,
            file_id:file_id
            //pdfBase64:pdfBase64            
        })
        _log.save();
    }

    this.isTemporarilyDown = async (req,res,next)=>{
        const isDown = await app_settings.findOne({"app_shutdown":true}); 
        console.log(`Checking isTemporarilyDown: ${isDown}`);
        if(isDown){
            console.log("Website is Temporarily Down for Maintenance.");
            return res.render("pages/client/503",{layout:false});
        }
        return next();
    }

    return {
        categoryService: {
                getCategoriesAsync  :   this.getCategoriesAsync,
            getCategoryAsync    :   this.getCategoryAsync,
            addCategoryItemAsync     :   this.addCategoryItemAsync,
            addCategoryAsync        : this.addCategoryAsync,
            getCategoriesByFilterAsync:this.getCategoriesByFilterAsync,
            deleteCategoriesByFilterAsync:this.deleteCategoriesByFilterAsync
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
            getPreDesignedAsync     :   this.getPreDesignedAsync
        },
        reportingService: {
            getCustomerReport   :   this.getCustomerReport,
            getSummaryReport    :   this.getSummaryReport,  
        },
        contentService: {
            addOrUpdateContentAsync  :  this.addOrUpdateContentAsync ,
            getContentAsync          :  this.getContentAsync
        },
        logger:{
            log: this.addLogs
        },
        isTemporarilyDown           : this.isTemporarilyDown, 
        clearCache: clearCache
    }
})();


module.exports = commonService; 