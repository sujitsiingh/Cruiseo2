const mongoose=require("mongoose")

const carSchema=new mongoose.Schema({
    carName:{
        type:String,
        required:true
    },
    carCity:{
        type:String,
        required:true
    },
    carType:{
        type:String,
        required:true
    },
    carRegdNo:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    chassis:{
        type:String,
        required:true,
        unique:true
    },
    ins:{
        type:String,
        required:true
    },
    puc:{
        type:String,
        required:true
    },
    bookStatus:{
        type:Boolean,
        required:true,
        default:false
    }
})

const CarModel=mongoose.model("Car",carSchema)
module.exports=CarModel