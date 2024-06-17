const mongoose=require("mongoose")

const enquirySchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pickupDt:{
        type:String,
        required:true
    },
    pickupTime:{
        type:String,
        required:true
    },
    dropDt:{
        type:String,
        required:true
    },
    dropTime:{
        type:String,
        required:true
    }
})

const EnquiryModel=mongoose.model("Enquiry",enquirySchema)
module.exports=EnquiryModel