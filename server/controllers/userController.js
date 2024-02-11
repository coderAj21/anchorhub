const User=require("../modals/User");
const OTP=require("../modals/OTP");
const otpGenrator = require("otp-generator");

exports.sendOtp=async(req,res)=>{
    try{
        const {email,isUser}=req.body;
        // check user in db
        console.log(email);
        const checkUser=await User.findOne({email});
        console.log(checkUser);
        if ( !isUser && checkUser){
            return res.status(401).json({
                success:false,
                message:"Email already exitsss..",
            });
        };
        // generate otp
        let otp=otpGenrator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        });
        console.log("OTP : "+otp);
        // find the otp for uniqueness
        let result=await OTP.findOne({otp:otp});
        while (result){
            otp=otpGenrator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            });
            result=await OTP.findOne({otp:otp});
        }
        const saveOtp=new OTP({email,otp});
        const optResult=await saveOtp.save();
        console.log("otp aa gya...");
        res.status(200).json({
            success:true,
            message:"OTP Sent Succeefully...",
            otp,
        });
    }catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:error.message,
        });
    };
}


exports.signUp=async(req,res)=>{
    try{
        const {name,email,otp}=req.body;
        if (!name || !email || !otp){
            return res.status(401).json({
                success:false,
                message:"All Field are required..."
            });
        };
        const user=await User.findOne({email});
        if (user){
            return res.status(401).json({
                success:false,
                message:"User already Exists..."
            });
        }
        const recentOtp=await OTP.findOne({email}).sort({createdAt:-1}).limit(1);
        if(!recentOtp){
            return res.status(401).json({
                success:false,
                message:"OTP is not found...."
            });
        };
        const newUser= new User({
            name,
            email
        });
        await newUser.save();
        return res.status(200).json({
            success:true,
            message:"User Sign In Successfully..."
        });
        
    }catch(error){
        return res.status(400).json({
            success:false,
            error:error.message
        });
    }
}
// login method
exports.login=async (req,res)=>{
    try{
        const{email,otp}=req.body;
        if (!email || !otp){
            return res.status(401).json({
                success:false,
                message:"All Field are required..."
            });
        };
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                success:false,
                message:"User not Registered..."
            });
        }
        const recentOtp=await OTP.findOne({email}).sort({createdAt:-1}).limit(1);
        if(!recentOtp){
            return res.status(401).json({
                success:false,
                message:"OTP is not found...."
            });
        };
        return res.status(200).json({
            success:true,
            message:"User Login Successfully..."
        });
    }catch(error){
        return res.status(400).json({
            success:false,
            error:error.message,
        });
    };
};
