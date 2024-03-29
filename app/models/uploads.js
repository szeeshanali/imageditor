const mongoose = require('mongoose');



const schema  = new mongoose.Schema({
    
    title           :   {   type    :   String    },
    name            :   {   type    :   String    },
    desc            :   {   type    :   String    },
    file_name       :   {   type    :   String    },
    file_ext        :   {   type    :   String    },
    order_no        :   {   type    :   Number    },
    code            :   {   type    :   mongoose.ObjectId,  required   :   true },
    templateId      :   {   type    :   mongoose.ObjectId },
    active          :   {   type    :   Boolean,            default    :   true },
    deleted         :   {   type    :   Boolean,            default    :   false },
    blob            :   {   type    :   Buffer    },
    json            :   {   type    :   String   },
    base64          :   {   type    :   String    },
    thumbBase64     :   {   type    :   String   },
    editable        :   {   type    :   Boolean, default    :  false    },
    paid            :   {   type    :   Boolean, default    :  false    },
    category        :   {   type    :   mongoose.ObjectId,  required   :  false    },
    link            :   {   type    :   String  },
    path            :   {   type    :   String  },
    meta            :   {   type    :   String  },
    created_dt      :   {   type    :   Date,   default     :   Date.now()},
    default         :   {   type    :   Boolean },
    by_admin        :   {   type    :   Boolean },
    type            :   {   type    :   String  },
    uploaded_by     :   {   type    :   mongoose.ObjectId  },
    modified_dt     :   {   type    :   Date    },
    ref_code        :   {   type    :   String    },
    copyright_flag  :   {   type    :   Boolean},
    comments        :   {type    :   Array},
    });

const uploads   = mongoose.model('uploads',schema);
module.exports  = uploads;
