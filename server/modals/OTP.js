const mongoose=require("mongoose");
const sendEmail=require("../config/sendMail");


const otpSchema=new mongoose.Schema({
    otp:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:3*60,
    }
});


async function sendEmailToUser(email,otp){
    try{
        const response=await sendEmail(email,"Verification mail from AnchorHub ","Please use the verification code to Login in : "+otp);
        console.log(response);
    }catch(error){
        console.log("Error During Sending the Otp...");
    }

}

otpSchema.pre("save",async function(next){
    await sendEmailToUser(this.email,this.otp);
    next();
});

module.exports=mongoose.model("OTP",otpSchema);