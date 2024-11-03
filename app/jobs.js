const fs = require('fs');
const logs = require("../app/models/logs");
const appSettings = require("../app/models/settings");

const cron = require('node-cron');

async function  job_cleanup_pdfs() {
    const settings =  await appSettings.findOne(); 
    const age = settings.pdf_cleanup_days;
    console.log("PDF cleanup days: "+ age);
    //** disable job if zero */
    if(age === 0){ return; }
    /* job executes on everyday midnight (00:00)*/
    
    cron.schedule('0 0 * * *', async () => {
        try {
          
            console.log('PDF Cleanup Days ==>' + age)
            const dt = new Date(Date.now() - age * 24 * 60 * 60 * 1000);
            let foundPDfs = await logs.find({type: { $in: ["download_pdf", "submit-design"] },file_id:{$ne:null}, "created_dt": { $lt: dt, } },{_id:1, created_dt:1})
            const ids = foundPDfs.map(i=>i._id);
            if(!ids || ids.length == 0){
                console.log(`No pdfs found till this date: ${dt.toISOString().split('T')[0]}`)
                return; 
            }
            const dts = [...new Set(foundPDfs.map(i=>new Date(i.created_dt).toISOString().split('T')[0]))]; 
            dts.forEach(dt => {
               try {
                const dirPath = `${__dirname}/public/uploads/client/pdfs/${dt}`;
                console.log(`Deleting folder: ${dirPath}`);
                fs.rm(dirPath, { recursive: true, force: true }, async (err) => {
                     if (err) {
                         return console.error(`Error removing directory: ${err}`);
                     }
                     console.log('Directory removed successfully');
                     console.log(`updating logs date:${ids.toString()}`); 
                     await logs.updateMany({_id:{$in:ids}},{ file_id: null }); 
                     console.log('Updated logs successfully');
                 });
               } catch (error) {
                console.log(error);
               }
            
           });
        } catch (error) {
            console.error(`--> Error in scheduler while deleting pdfs: ${error}`);
        }

    });
}

module.exports = {
    job_cleanup_pdfs
};
