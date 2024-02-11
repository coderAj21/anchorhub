const mongoose=require("mongoose");


const educationSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    college:{
        type:String,
    },
    type:{
        type:String,
        enum:["College","School"],
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date
    }
});

module.exports=mongoose.model("Education",educationSchema);