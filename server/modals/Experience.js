const mongoose=require("mongoose");


const experienceSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    type:{
        type:String,
        enum:["Intership","Job"],
        required:true,
    },
    name:{
        type:String,
    },
    website:{
        type:String,
    },
    role:{
        type:String,
    },
    startDate:{
        type:String,
    },
    endDate:{
        type:String,
    },
    coverLetter:{
        type:String,
    }
});

module.exports=mongoose.model("Experience",experienceSchema);
