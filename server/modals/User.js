const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    image:{
        type:String
    },
    mobile:{
        type:String
    },
    linkedln:{
        type:String,
    },
    github:{
        tyep:String
    },
    resume:{
        type:String,
    },
    education:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Education",
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
    },
    experience:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Experience"
    }
})

module.exports=mongoose.model("User",userSchema);