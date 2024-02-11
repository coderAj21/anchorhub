const mongoose=require("mongoose");


const projectSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    type:{
        type:String,
        enum:["Solo","Group"]
    },
    link:{
        type:String,
    }
});


module.exports=mongoose.model("Project",projectSchema);